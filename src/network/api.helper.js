// eslint-disable-next-line max-classes-per-file
export class ApiError extends Error {
  constructor(response, message) {
    super();
    this.response = response;
    this.status = response.status;
    this.message =
      message ||
      `Request to ${response.url} failed with status ${response.status}`;
  }
}

export const checkResponse = response => {
  if (!response.ok) {
    throw new ApiError(response);
  }

  return response;
};

export const getRequest = (path, headers) => {
  return fetch(path, {
    method: 'GET',
    headers,
  })
    .then(async response => {
      if (response.ok) {
        return response.text();
      }

      const jsonBody = await response.json();
      if (jsonBody.message) throw new ApiError(response, jsonBody.message);

      throw new ApiError(response);
    })
    .then(payload => {
      try {
        return JSON.parse(payload);
      } catch {
        // This is fine:
        // Payload is just text like "OK"
        return payload;
      }
    });
};

/**
   Performs a fetch and returns the json parsed response on status OK. Allows
   to return specific responses for given status codes or by generic return on
   errors.
   * @param {string} method - HTTP request method (GET, PUT, DELETE, ...)
   * @param {string} path - URI
   * @param {object} headers - Request headers object
   * @param {object} responseHandlersByStatus - object with status codes as key and return callback as value
   * @param {function} errorResponseHandler - callback that returns fallback response on status code >= 400
   * @returns Promise of json parsed fetch response
   */
export const requestWithStatusHandlers = (
  method,
  path,
  headers,
  responseHandlersByStatus = null,
  errorResponseHandler = null
) => {
  return fetch(path, {
    method,
    headers,
  })
    .then(async response => {
      if (
        responseHandlersByStatus &&
        responseHandlersByStatus[response.status] &&
        typeof responseHandlersByStatus[response.status] === 'function'
      ) {
        return responseHandlersByStatus[response.status](response);
      }
      if (
        errorResponseHandler &&
        typeof errorResponseHandler === 'function' &&
        response.status &&
        response.status >= 400
      ) {
        return errorResponseHandler(response);
      }

      if (response.ok) {
        return response.json();
      }

      const jsonBody = await response.json();
      throw new ApiError(response, jsonBody?.message);
    })
    .catch(error => {
      if (error instanceof ApiError) {
        console.error(`Error requesting ${method} ${path}`, error);
      }

      throw error;
    });
};

export const queryDoNotRetryOnCode = statusCodeList => (
  count,
  { message: status }
) => !statusCodeList.includes(status);

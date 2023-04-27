/* eslint-disable sonarjs/no-duplicate-string */
import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';

const headers = {
  'Content-Type': 'application/json',
};

// GENERAL
export const getCompletedLists = id => {
  return axios
    .get(`${BASE_URL}/v1/visa/getStatuses/${id}`, { headers })
    .then(response => response)
    .catch(error => error.response);
};

// USER
export const login = data => {
  // return axios.post(`${BASE_URL}v1/users/login`, data, { headers });
  return axios.post('http://localhost:3000/v1/users/login', data, { headers });
};

export const verifyToken = data => {
  return axios.get('http://localhost:3000/v1/users/validate', {
    headers: {
      ...headers,
      Authorization: `Bearer ${data}`,
    },
  });
};

export const registerUserProfile = data => {
  return axios.post(`${BASE_URL}/v1/user/users`, data, { headers });
};

export const completeUserProfile = (data, id) => {
  return axios
    .patch(`${BASE_URL}/v1/user/users/${id}`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const getUser = id => {
  return axios
    .get(`${BASE_URL}/v1/user/users/${id}`, { headers })
    .then(response => response)
    .catch(error => error.response);
};

// VISA
export const getVisaInformation = id => {
  return axios
    .get(`${BASE_URL}/v1/visa/information/${id}`, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const setVisaInformation = (id, data) => {
  return axios
    .post(`${BASE_URL}/v1/visa/information/${id}`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const getFlightInformation = id => {
  return axios
    .get(`${BASE_URL}/v1/visa/flight/${id}`, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const setFlightInformation = (id, data) => {
  return axios
    .post(`${BASE_URL}/v1/visa/flight/${id}`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

// DOCUMENTS
export const setPassportDocument = (id, data) => {
  return axios
    .post(`${BASE_URL}/v1/visa/documents/passport/${id}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response)
    .catch(error => error.response);
};

export const setResidencePermitDocument = (id, data) => {
  return axios
    .post(`${BASE_URL}/v1/visa/documents/residencePermit/${id}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response)
    .catch(error => error.response);
};

export const setBiometricImageDocument = (id, data) => {
  return axios
    .post(`${BASE_URL}/v1/visa/documents/biometricImage/${id}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response)
    .catch(error => error.response);
};

// Agreement
export const getAgreement = id => {
  return axios
    .get(`${BASE_URL}/v1/visa/agreement/${id}`, {
      headers,
    })
    .then(response => response)
    .catch(error => error.response);
};

// /visa-application/:visaId/agreement
export const setAgreement = (visaId, data) => {
  // console.log('data', data);
  return axios
    .post(`${BASE_URL}/v1/visa/visa-application/${visaId}/agreement`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response)
    .catch(error => {
      console.log('error', error);
      console.error(error.data.message);
      return error.response;
    });
};

export const getCityofCountry = data => {
  const cityConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://countriesnow.space/api/v0.1/countries/cities',
    headers: { 'Content-Type': 'application/json' },
    data,
  };

  return axios(cityConfig);
};

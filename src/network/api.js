/* eslint-disable sonarjs/no-duplicate-string */
import axios from 'axios';
import { getToken } from 'utils/getToken';

export const BASE_URL = 'http://localhost:3000';

const headers = {
  'Content-Type': 'application/json',
};

export const axiosConfig = async () => {
  const token = await getToken();
  return {
    headers: { ...headers, Authorization: `Bearer ${token}` },
  };
};

export const axiosDocumentConfig = async () => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };
};

// GENERAL
export const getCompletedLists = id => {
  return axios
    .get(`${BASE_URL}/v1/visa/getStatuses/${id}`, { headers })
    .then(response => response)
    .catch(error => error.response);
};

// USER
export const login = data =>
  axios.post(`${BASE_URL}/v1/users/login`, data, { headers });

export const verifyToken = data =>
  axios.get(`${BASE_URL}/v1/users/validate`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${data}`,
    },
  });

export const registerUserProfile = data => {
  return axios.post(`${BASE_URL}/v1/users/register`, data, { headers });
};

export const forgotPassword = data => {
  return axios.post(`${BASE_URL}/v1/users/forgotPassword`, data, { headers });
};

export const enterOTP = ({ data, id }) => {
  return axios.post(`${BASE_URL}/v1/users/verifyAccount/${id}`, data, {
    headers,
  });
};

export const completeUserProfile = (data, id) => {
  return axios
    .patch(`${BASE_URL}/v1/user/users/${id}`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const getUser = async () => {
  return axios.get(`${BASE_URL}/v1/users/user`, await axiosConfig());
};

// VISA
export const startVisaProcess = async data =>
  axios.post(`${BASE_URL}/v1/visa/visa-application`, data, await axiosConfig());

export const updateVisaApplication = async (data, id) =>
  axios.put(
    `${BASE_URL}/v1/visa/visa-application/${id}`,
    data,
    await axiosConfig()
  );

export const getAllVisaApplicationByUser = async () =>
  axios.get(`${BASE_URL}/v1/visa/visa-application`, await axiosConfig());

export const getSingleVisaInformation = async id =>
  axios.get(`${BASE_URL}/v1/visa/visa-application/${id}`, await axiosConfig());

export const setVisaInformation = (id, data) => {
  return axios
    .post(`${BASE_URL}/v1/visa/information/${id}`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const getFlightInformation = async id =>
  axios.get(
    `${BASE_URL}/v1/visa/visa-application/flight-information/${id}`,
    await axiosConfig()
  );

export const setFlightInformation = async (id, data) =>
  axios.post(
    `${BASE_URL}/v1/visa/visa-application/${id}/flight-information`,
    data,
    await axiosConfig()
  );

// DOCUMENTS
export const uploadDocument = async (visaId, data) =>
  axios.post(
    `${BASE_URL}/v1/visa/visa-application/${visaId}/documents`,
    data,
    await axiosDocumentConfig()
  );

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
export const setAgreement = async (visaId, data) =>
  axios.post(
    `${BASE_URL}/v1/visa/visa-application/${visaId}/agreement`,
    data,
    await axiosConfig()
  );

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

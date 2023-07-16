/* eslint-disable sonarjs/no-duplicate-string */
import axios from 'axios';
import config from 'config/config';

const headers = {
  'Content-Type': 'application/json',
};

export const axiosConfig = () => {
  return {
    headers: { ...headers },
  };
};

export const axiosDocumentConfig = () => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
  };
};

// USER
export const userLogin = data =>
  axios.post(`${config.API_URL}/v1/users/login`, data, { headers });

export const registerUserProfile = data => {
  return axios.post(`${config.API_URL}/v1/users/register`, data, { headers });
};

export const forgotPassword = data => {
  return axios.post(`${config.API_URL}/v1/users/forgotPassword`, data, {
    headers,
  });
};

export const enterOTP = ({ data, id }) => {
  return axios.post(`${config.API_URL}/v1/users/verifyAccount/${id}`, data, {
    headers,
  });
};

export const reSendOTP = id =>
  axios.get(`${config.API_URL}/v1/users/resendToken/${id}`, { headers });

export const getUser = () => {
  return axios.get(`${config.API_URL}/v1/users/user`, axiosConfig());
};

export const updateUser = data =>
  axios.put(`${config.API_URL}/v1/users/user`, data, axiosConfig());

export const deleteUser = () =>
  axios.delete(`${config.API_URL}/v1/users/user/delete`, axiosConfig());

export const changePassword = data =>
  axios.post(`${config.API_URL}/v1/users/changePassword`, data, axiosConfig());

// VISA
export const startVisaProcess = data =>
  axios.post(`${config.API_URL}/v1/visa/visa-application`, data, axiosConfig());

export const updateVisaApplication = (data, id) =>
  axios.put(
    `${config.API_URL}/v1/visa/visa-application/${id}`,
    data,
    axiosConfig()
  );

export const getAllVisaApplicationByUser = () =>
  axios.get(`${config.API_URL}/v1/visa/visa-application`, axiosConfig());

export const getSingleVisaInformation = id =>
  axios.get(`${config.API_URL}/v1/visa/visa-application/${id}`, axiosConfig());

export const setFlightInformation = (id, data) =>
  axios.post(
    `${config.API_URL}/v1/visa/visa-application/${id}/flight-information`,
    data,
    axiosConfig()
  );

// DOCUMENTS
export const uploadDocument = (visaId, data) =>
  axios.post(
    `${config.API_URL}/v1/visa/visa-application/${visaId}/documents`,
    data,
    axiosDocumentConfig()
  );

// /visa-application/:visaId/agreement
export const setAgreement = (visaId, data) =>
  axios.post(
    `${config.API_URL}/v1/visa/visa-application/${visaId}/agreement`,
    data,
    axiosConfig()
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

import React from "react";
import axios from "axios";
import { useAxios } from "./config";
import { baseUrl } from "./config";
import { apiKey } from "./config";

export const loginUserIn = async (userData) => {
  try {
    const response = await useAxios.post(`/user/signin`, userData);
    const { data, status } = response;
    console.log('status', status)
    if (status === 200 && data.success === false) {
        return { data: {}, status, success: data.success, message: data?.message };
    } else if (status === 200 && data.success === true) {
        return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
    }
} catch (error) {
    return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
}
};

export const signUserUp = async (userData) => {
  try {
    const response = await useAxios.post('user/onboard', userData);
    const { data, status } = response;
    console.log('status', status)
    if (status === 200 && data.success === false) {
        return { data: {}, status, success: data.success, message: data?.message };
    } else if (status === 200 && data.success === true) {
        return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
    }
} catch (error) {
    return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
}
};

const config = (token) => {
  return token
    ? {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Basic ZmxvYXRoaHViQGdtYWlsLmNvbTplMmIxYjkzZTMwODI0ODVhMzA4OTkyYzhjMzBlMDZjMQ==`,
        },
      };
};

const baseHeader = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Basic ZmxvYXRoaHViQGdtYWlsLmNvbTplMmIxYjkzZTMwODI0ODVhMzA4OTkyYzhjMzBlMDZjMQ==`,
  },
};

export default {
  useAxios: axios.create({
    baseURL: baseUrl,
    headers: baseHeader,
  }),
  login: async (url, body) => {
    try {
      const res = await axios.post(`${baseUrl}${url}`, body, baseHeader);
      const { response } = res;
      console.log(response, "error here");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  get: async (url, token) => {
    try {
      const res = await axios.get(`${baseUrl}${url}`, baseHeader);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  post: async (url, body) => {
    try {
      const res = await axios.post(`${baseUrl}${url}`, body, baseHeader);
    } catch (error) {}
  },
};

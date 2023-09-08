import api from "./api";

export const logUserIn = async (url, body, token) => {
  try {
    const res = await api.post(url,body,token);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (url, body, token) => {
  try {
    const res = await api.post(url, body, token);
    return res;
  } catch (error) {
    console.log(error);
  }
};

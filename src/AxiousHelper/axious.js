import axios from "axios";
// const baseurl = "http://localhost:3002/api/v1";
const baseurl = import.meta.env.VITE_BASE_URL + "/api/v1";

console.log(baseurl);
const ApiendPoint = async ({ data, method, url, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
// register the new user
export const postUser = async (data) => {
  const obj = {
    method: "post",
    url: baseurl + "/users/register",
    data,
  };
  return await ApiendPoint(obj);
};

// login user
export const loginUser = async (data) => {
  const obj = {
    method: "post",
    url: baseurl + "/users/login",
    data,
  };
  const result = await ApiendPoint(obj);

  return result;
};

// get user profile after getting the token fro  fron end
export const getUserProfile = async () => {
  const obj = {
    method: "get",
    url: baseurl + "/users",

    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const result = await ApiendPoint(obj);
  return result;
};

// post the transaction
export const postTransaction = async (data) => {
  const obj = {
    method: "post",
    url: baseurl + "/transactions",
    data,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return await ApiendPoint(obj);
};
export const getTranscation = () => {
  const obj = {
    method: "get",
    url: baseurl + "/transactions",

    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const result = ApiendPoint(obj);
  return result;
};
// delete transaction api
export const deleteTransaction = async (transactionsToDelete) => {
  const obj = {
    method: "delete",
    url: baseurl + "/transactions",
    data: transactionsToDelete,

    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const result = await ApiendPoint(obj);

  return result;
};
// forgot password api
export const forgotPassword = async (data) => {
  const obj = {
    method: "post",
    url: baseurl + "/users/forgotPassword",
    data,
  };
  const result = await ApiendPoint(obj);
  console.log(result);
  return result;
};

// this funtion will be called when user will send request to reset password
export const resetPassword = async (token, data) => {
  const obj = {
    method: "patch",
    url: baseurl + "/users/resetPassword",
    data,
    headers: {
      Authorization: token,
    },
  };
  const result = await ApiendPoint(obj);

  return result;
};

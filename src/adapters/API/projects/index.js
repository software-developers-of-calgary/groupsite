import { get, post } from "axios";
import { URL } from "../../../config";

const handleError = (error) => {
  const errorObject = {
    message: error.message,
    status: error.response && error.response.status,
  };
  console.log(errorObject);
  return { error: errorObject };
};

export const createProject = async (data) => {
  const accessToken = localStorage.getItem("serverApiToken");
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };
  try {
    const response = await post(`${URL}/projects`, data, options);
    return { error: null, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

export const queryProjects = async () => {
  try {
    const response = await get(`${URL}/projects`);
    return { error: null, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

export const addUserToEvent = async (eventId) => {
  const token = localStorage.getItem("serverApiToken");
  try {
    const response = await post(`${URL}/events/${eventId}/users`, "{}", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { error: null, users: response.data };
  } catch (error) {
    return handleError(error);
  }
};

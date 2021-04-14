import { post } from 'axios'
import { URL } from "../../../config";

export const createProject = async data => {
  const accessToken = localStorage.getItem('serverApiToken')
  const options = { headers: { Authorization: `Bearer ${accessToken}` }}
  try {
    const response = await post(`${URL}/projects`, data, options)
    return { error: null, data: response.data }
  } catch (error) {
    const errorObject = {
      message: error.message,
      status: error.response && error.response.status
    }
    console.log(errorObject)
    return { error: errorObject }
  }
}

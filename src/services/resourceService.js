import axios from "axios";
import { apiConfig } from "../config/apiconfig";

export const aboutColombia = async () => {
  try {
    const response = await axios.get(`${apiConfig.baseUrl}/Country/Colombia`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

import {
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILURE,
  FETCH_RESOURCES_REQUEST,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  FETCH_TOURISTICATRACTIONS_REQUEST,
  FETCH_TOURISTICATRACTIONS_SUCCESS,
  FETCH_TOURISTICATRACTIONS_FAILURE,
} from "../../constants/actionTypes";
import axios from "axios";
import { apiConfig } from "../../config/apiconfig";

export const fetchResources = () => async (dispatch) => {
  dispatch({ type: FETCH_RESOURCES_REQUEST });

  try {
    const resources = await axios.get(`${apiConfig.baseUrl}/Country/Colombia`);
    console.log(resources.data);
    dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: resources.data });
  } catch (error) {
    dispatch({ type: FETCH_RESOURCES_FAILURE, payload: error.message });
  }
};

export const fetchDepartments = () => async (dispatch) => {
  dispatch({ type: FETCH_DEPARTMENTS_REQUEST });

  try {
    const departments = await axios.get(
      `${apiConfig.baseUrl}/Region/5/departments`
    );
    console.log(departments.data);
    dispatch({ type: FETCH_DEPARTMENTS_SUCCESS, payload: departments.data });
  } catch (error) {
    dispatch({ type: FETCH_DEPARTMENTS_FAILURE, payload: error.message });
  }
};

export const fetchTouristicAttractions = () => async (dispatch) => {
  dispatch({ type: FETCH_TOURISTICATRACTIONS_REQUEST });

  try {
    const touristicAttractions = await axios.get(
      `${apiConfig.baseUrl}/TouristicAttraction`
    );
    console.log(touristicAttractions.data);
    dispatch({
      type: FETCH_TOURISTICATRACTIONS_SUCCESS,
      payload: touristicAttractions.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TOURISTICATRACTIONS_FAILURE,
      payload: error.message,
    });
  }
};
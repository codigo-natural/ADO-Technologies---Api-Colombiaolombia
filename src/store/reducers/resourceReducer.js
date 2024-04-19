import {
  FETCH_RESOURCES_REQUEST,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILURE,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  FETCH_TOURISTICATRACTIONS_REQUEST,
  FETCH_TOURISTICATRACTIONS_SUCCESS,
  FETCH_TOURISTICATRACTIONS_FAILURE,
} from "../../constants/actionTypes";

const initialState = {
  resources: [],
  departments: [],
  touristicAttractions: [],
  loading: false,
  error: null,
};
export const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        resources: action.payload,
      };
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        resources: action.payload,
        error: null,
      };
    case FETCH_RESOURCES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const departmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPARTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        departments: action.payload,
      };
    case FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: action.payload,
        error: null,
      };
    case FETCH_DEPARTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const touristicAttractionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOURISTICATRACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        touristicAttractions: action.payload,
      };
    case FETCH_TOURISTICATRACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        touristicAttractions: action.payload,
        error: null,
      };
    case FETCH_TOURISTICATRACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

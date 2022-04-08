import {
  API_createProduct,
  API_deleteProduct,
  API_getProduct,
  API_getProducts,
  API_updateProduct,
} from "../../api/requests/product";
import * as action from "../types/actionTypes";
import { logRequestError } from "./errorHandler";

export const fetchProduct = (id) => async (dispatch) => {
  await API_getProduct(id)
    .then((res) => {
      dispatch({
        type: action.FETCH_PRODUCT,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const fetchAllProducts = () => async (dispatch) => {
  await API_getProducts()
    .then((res) => {
      dispatch({
        type: action.FETCH_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const createProduct = (data) => async (dispatch) => {
  await API_createProduct(data)
    .then((res) => {
      dispatch({
        type: action.CREATE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const updateProduct = (id, data) => async (dispatch) => {
  await API_updateProduct(id, data)
    .then((res) => {
      dispatch({
        type: action.UPDATE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const deleteProduct = (id) => async (dispatch) => {
  await API_deleteProduct(id)
    .then((res) => {
      dispatch({
        type: action.DELETE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

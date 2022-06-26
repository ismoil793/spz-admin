import {
  API_createProduct,
  API_deleteProduct,
  API_getProduct,
  API_updateProduct,
} from "../../api/requests/product";
import * as action from "../types/actionTypes";
import logRequestError from "./errorHandler";
import { notifyError } from "../../components/NotifyButton";

export const fetchProducts = (subCategoryID) => async (dispatch) => {
  let products = [];

  await API_getProduct(subCategoryID, { per_page: 1000 })
    .then(async (res) => {
      const { current_page, last_page, data } = res.data || {};
      products = Array.isArray(data) ? [...data] : products;

      if (current_page < last_page) {
        await API_getProduct(subCategoryID, { page: current_page + 1 }).then(
          (res) => {
            const { data } = res.data || {};
            products = Array.isArray(data) ? [...products, ...data] : products;
            dispatch({
              type: action.FETCH_PRODUCTS,
              payload: products,
            });
          }
        );
      } else {
        dispatch({
          type: action.FETCH_PRODUCTS,
          payload: products,
        });
      }
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

export const clearProduct = () => async (dispatch) => {
  dispatch({
    type: action.CLEAR_PRODUCT,
  });
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
        prodID: id,
      });
      notifyError("Удалено");
    })
    .catch((e) => logRequestError(e));
};

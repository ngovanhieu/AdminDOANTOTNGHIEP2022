import { CHECK_UPDATE_PRODUCT, CHECK_UPDATE_USER, SET_CHECK_ITEM_PRODUCT, SET_DATA_PRODUCTS, SET_DATA_USERS, SET_DISPLAY_ALERT, SET_ITEM_PRODUCT, SET_ITEM_PROP_ALERT, SET_ITEM_USER, SET_LOADING, UPDATE_PRODUCT } from "./constants";

export const setDisplayAlert = (payload) => ({
  type: SET_DISPLAY_ALERT,
  payload: payload,
});
export const setItemPropAlert = (payload) => ({
  type: SET_ITEM_PROP_ALERT,
  payload: payload,
});


export const setDataProducts = (payload) => ({
  type: SET_DATA_PRODUCTS,
  payload: payload,
});
export const setItemProduct = (payload) => ({
  type: SET_ITEM_PRODUCT,
  payload: payload,
});

export const setLoadingGlobal = (payload) => ({
  type: SET_LOADING,
  payload: payload,
});
export const checkUpdateProduct = (payload) => ({
  type: CHECK_UPDATE_PRODUCT,
  payload: payload,
});
export const checkUpdateUser = (payload) => ({
  type: CHECK_UPDATE_USER,
  payload: payload,
});
export const setDataUsers = (payload) => ({
  type: SET_DATA_USERS,
  payload: payload,
});
export const setItemUser = (payload) => ({
  type: SET_ITEM_USER,
  payload: payload,
});


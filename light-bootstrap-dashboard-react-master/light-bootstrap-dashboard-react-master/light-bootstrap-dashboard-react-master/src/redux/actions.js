import { CHECK_UPDATE_PRODUCT, SET_CHECK_ITEM_PRODUCT, SET_DATA_PRODUCTS, SET_DISPLAY_ALERT, SET_ITEM_PRODUCT, SET_ITEM_PROP_ALERT, SET_LOADING, UPDATE_PRODUCT } from "./constants";

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


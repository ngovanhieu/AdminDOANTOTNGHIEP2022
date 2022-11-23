import {
  CHECK_UPDATE_PRODUCT,
  CHECK_UPDATE_USER,
  SET_DATA_PRODUCTS,
  SET_DATA_USERS,
  SET_DISPLAY_ALERT,
  SET_ITEM_PRODUCT,
  SET_ITEM_PROP_ALERT,
  SET_ITEM_USER,
  SET_LOADING,
} from "./constants";

const initialState = {
  alert: {
    displayAlert: false,
    itemPropAlert: <></>,
  },

  products: {
    values: [],
    checkSucces: "",
  },

  itemProduct: {
    values: [],
  },

  users: {
    values: [],
    checkSucces: "",
  },

  itemUser: {
    values: [],
  },

  checkUpdateProduct: false,
  checkUpdateUser: false,
  isLoadingGlobal: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAY_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          displayAlert: action.payload,
        },
      };
    case SET_ITEM_PROP_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          itemPropAlert: action.payload,
        },
      };

    case SET_LOADING:
      return {
        ...state,
        isLoadingGlobal: action.payload,
      };

    case SET_DATA_PRODUCTS:
      return {
        ...state,
        products: {
          values: action.payload,
        },
      };
    case SET_ITEM_PRODUCT:
      return {
        ...state,
        itemProduct: {
          ...state.itemProduct,
          values: action.payload,
        },
      };
    case SET_DATA_USERS:
      return {
        ...state,
        users: {
          values: action.payload,
        },
      };
    case SET_ITEM_USER:
      return {
        ...state,
        itemUser: {
          ...state.itemUser,
          values: action.payload,
        },
      };
    case CHECK_UPDATE_PRODUCT:
      return {
        ...state,
        checkUpdateProduct: action.payload,
      };
    case CHECK_UPDATE_USER:
      return {
        ...state,
        checkUpdateUser: action.payload,
      };

    default:
      return state;
  }
};
export default rootReducer;

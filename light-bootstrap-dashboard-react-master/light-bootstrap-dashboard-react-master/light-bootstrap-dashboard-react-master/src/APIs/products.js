import axios from "axios";
import { setLocalStorage } from "localStorage";
import {
  checkUpdateProduct,
  setCheckItemProduct,
  setDataProducts,
  setDisplayAlert,
  setItemProduct,
  setItemPropAlert,
  setLoadingGlobal,
} from "../redux/";

const productRequest = {
  getAllProducts: async (dispatch) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        // .get("http://localhost:5000/api/products/getAllProducts")
        .get("http://localhost:5000/api/Products")
        .then(function (response) {
          // handle success
          const title = "products";
          const data = response.data.Product.reverse();
          setLocalStorage(title, data);
          dispatch(setDataProducts(data));
          dispatch(setLoadingGlobal(false));
        })
        .catch(function (error) {
          // handle error
          dispatch(setLoading(false));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      console.log(error);
    }
  },

  getProduct: async (dispatch, id) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .get(`http://localhost:5000/api/getProductById/${id}`)
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setItemProduct(response.data));
          dispatch(setLoadingGlobal(false));
        })
        .catch(function (error) {
          // handle error
          dispatch(setLoading(false));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      console.log(error);
    }
  },

  updateProduct: async (dispatch, id, data) => {
    try {
      dispatch(setLoadingGlobal(true));
      dispatch(checkUpdateProduct(true));
      axios
        .patch(`http://localhost:5000/api/editProduct/${id}`, data)
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Update successfuly!"));
          dispatch(setLoadingGlobal(false));
          dispatch(checkUpdateProduct(false));
        })
        .catch(function (error) {
          // handle error
          dispatch(setLoading(false));
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Update unsuccessfuly!"));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Update unsuccessfuly!"));
      console.log(error);
    }
  },

  removeProduct: async (dispatch, id) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .delete(`http://localhost:5000/api/removeProduct/${id}`)
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setLoadingGlobal(false));
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Delete successfuly!"));
        })
        .catch(function (error) {
          // handle error
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Delete unsuccessfuly!"));
          dispatch(setLoading(false));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Delete unsuccessfuly!"));
      console.log(error);
    }
  },
  addProduct: async (dispatch, data) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .post(`http://localhost:5000/api/addProduct`, data)
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setLoadingGlobal(false));
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Add product successfuly!"));
        })
        .catch(function (error) {
          // handle error
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Add product  unsuccessfuly!"));
          dispatch(setLoading(false));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Add product  unsuccessfuly!"));
      console.log(error);
    }
  },
};
export default productRequest;

import axios from "axios";
import { setLocalStorage } from "localStorage";
import {
  checkUpdateProduct,
  setCheckItemProduct,
  setDataOrders,
  setDataProducts,
  setDisplayAlert,
  setItemProduct,
  setItemPropAlert,
  setLoadingGlobal,
} from "../redux/";

const orderRequest = {
  getAllOrder: async (dispatch) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        // .get("http://localhost:5000/api/products/getAllProducts")
        .get("http://localhost:5000/api/orders/getAllOrders")
        .then(function (response) {
          // handle success
          console.log(response.data.data);
          dispatch(setDataOrders(response.data.data));
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

  updateOrder: async (dispatch, id, data) => {
    try {
      dispatch(setLoadingGlobal(true));
      dispatch(checkUpdateProduct(true));
      console.log(data);
      axios
        .patch(`http://localhost:5000/api/orders/editOrder/${id}`, {orderStatus: data})
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setItemPropAlert("Update successfuly!"));
          dispatch(setDisplayAlert(true));
          dispatch(setLoadingGlobal(false));
          dispatch(checkUpdateProduct(false));
        })
        .catch(function (error) {
          // handle error
          dispatch(setLoadingGlobal(false));
          dispatch(setItemPropAlert("Update unsuccessfuly!"));
          dispatch(setDisplayAlert(true));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      dispatch(setItemPropAlert("Update unsuccessfuly!"));
      dispatch(setDisplayAlert(true));
      console.log(error);
    }
  },

  
};
export default orderRequest;

import axios from "axios";
import { setLocalStorage } from "localStorage";
import {
    checkUpdateUser,
  setDataUsers,
  setDisplayAlert,
  setItemProduct,
  setItemPropAlert,
  setItemUser,
  setLoadingGlobal,
} from "../redux/";

const userRequest = {
  getAllUsers: async (dispatch) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .get("http://localhost:5000/api/getUsers")
        .then(function (response) {
          // handle success
        //   console.log(response);
          const data = response.data.users.reverse()
          dispatch(setDataUsers(data));
          dispatch(setLoadingGlobal(false));
        })
        .catch(function (error) {
          // handle error
          dispatch(setLoadingGlobal(false));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      console.log(error);
    }
  },

  getUser: async (dispatch, id) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .get(`http://localhost:5000/api/getUserById/${id}`)
        .then(function (response) {
          // handle success
          dispatch(setItemUser(response.data.response));
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


  updateUser: async (dispatch, id, data) => {
    try {
      dispatch(setLoadingGlobal(true));
      dispatch(checkUpdateUser(true));
      axios
        .patch(`http://localhost:5000/api/edit/${id}`, data)
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Update successfuly!"));
          dispatch(setLoadingGlobal(false));
          dispatch(checkUpdateUser(false));
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
  removeUser: async (dispatch, id) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .delete(`http://localhost:5000/api/remove/${id}`)
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

  addUser: async (dispatch, data) => {
    try {
      dispatch(setLoadingGlobal(true));
      axios
        .post(`http://localhost:5000/api/register`, data)
        .then(function (response) {
          // handle success
          console.log(response);
          dispatch(setLoadingGlobal(false));
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Add User successfuly!"));
        })
        .catch(function (error) {
          // handle error
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Add User Unsuccessfuly!"));
          dispatch(setLoading(false));
          console.log(error);
        });
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Add User Unsuccessfuly!"));
      console.log(error);
    }
  },

};
export default userRequest;

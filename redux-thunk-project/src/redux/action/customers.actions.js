import axios from "axios";

export const getAllCustomersAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_CUSTOMER_START",
    });

    try {
      let response = await axios.get(
        "https://northwind.vercel.app/api/customers"
      );
      dispatch({
        type: "GET_CUSTOMER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CUSTOMER_FAILED",
        payload: error,
      });
    }
  };
};

export const deletCustomerAction = (id) => {
  return async (dispatch) => {
    await axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
    dispatch({
      type: "DELETE_CUSTOMER",
      payload: id,
    });
  };
};

export const addCustomersAction = (values) => {
  return async (dispatch) => {
    await axios.post("https://northwind.vercel.app/api/customers", values);
    dispatch({
      type: " ADD_CUSTOMER",
    });
  };
};

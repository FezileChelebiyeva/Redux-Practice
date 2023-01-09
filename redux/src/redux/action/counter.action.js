export const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
export const inputValueAction = (value) => {
  return {
    type: "INPUT_VALUE",
    payload: value
  };
};
export const incrementByInputValueAction = (value) => {
    console.log(value);
  return {
    type: "INCREMENT_BY_INPUT_VALUE",
    payload: value
  };
};

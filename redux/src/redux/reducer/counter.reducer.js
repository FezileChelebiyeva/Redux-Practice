export const counterReducer = (state = { count: 0, inputValue: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "INPUT_VALUE":
      console.log(action);
      return {
        ...state,
        inputValue: action.payload,
      };
    case "INCREMENT_BY_INPUT_VALUE":
      console.log(action);
      return {
        ...state,
        count: state.count + +action.payload,
      };
    default:
      return state;
  }
};

export const initialState = {
  loading: true,
  stockData: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_STOCK_REQUEST":
      console.log("Action ",action.payload)
      return {
        ...state,
        loading: true,
        errorMessage: null,
        searchValue: action.payload
      };
    case "SEARCH_STOCK_SUCCESS":
      return {
        ...state,
        loading: false,
        stockData: action.payload
      };
    case "SEARCH_STOCK_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

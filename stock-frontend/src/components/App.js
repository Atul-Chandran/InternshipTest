import React, { useReducer, useEffect } from "react";

import Header from "./Header";
import Stock from "./Stock";
import LeftNav from "./LeftNav";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

const STOCK_URL = "http://localhost:3002/fetchStockData";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(state.searchValue){
      axios.get(STOCK_URL).then(jsonResponse => {
        dispatch({
          type: "SEARCH_STOCK_SUCCESS",
          payload: jsonResponse.data.Search
        });
      });
    }

  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_STOCK_REQUEST",
      payload: searchValue
    });

    console.log("Search value ",searchValue)

    axios(`http://localhost:3002/fetchStockData?tag=${searchValue}`).then(
      jsonResponse => {
        console.log("Data ",jsonResponse.data)
        if (jsonResponse.data.message === "Success") {
          dispatch({
            type: "SEARCH_STOCK_SUCCESS",
            payload: jsonResponse.data.data
          });
        } else {
          dispatch({
            type: "SEARCH_STOCK_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { stockData, errorMessage, loading } = state;

  const retrievedStockData =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      stockData.map((data, index) => (
        <Stock key={`${index}-${data.Title}`} stock={data} />
      ))
    );

  const searchTextStyle = {
    backgroundColor: "#EFEFEF",
    border: "15px solid white",
    paddingBottom: "50px",
    margin: "20px"
  }

  return (
    <div className="App">
      <div className="m-container">
        <Header text="Search for a stock tag" />

        <Search search={search} />

        {state.searchValue ?
                <div>
                  <LeftNav/>
                  <div style = {searchTextStyle}>
                      <p className="App-intro"><b>Search Results</b></p>
                      <p>Displaying {state.stockData.length} series for <b>{state.searchValue} </b></p>
                      <hr></hr>
                  </div>
                  {
                    state.stockData.length > 0 ? 
                      <div className="stock">{retrievedStockData}</div>
                    : ""
                  }
                </div> 
          : <p></p>
        }

      </div>
    </div>
  );
};

export default App;

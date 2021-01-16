import React from "react";
import ClampLines from 'react-clamp-lines';

import {stockDataStyling} from '../styles/StockDataStyling';

const Stock = ({ stock }) => {
  return (
    <div style = {stockDataStyling.stockMain} className="stock">
      <p style = {stockDataStyling.stockTitleStyle}><u>{stock.Title}</u></p>
      <div>
        <p style = {stockDataStyling.dataSubtitleStyle} id = "subtitle">{stock.Unit},{stock.Source},{stock.Frequency}</p>
        <ClampLines
        text={stock.Description}
        id="really-unique-id"
        lines={2}
        ellipsis="..."
        moreText="Expand"
        lessText="Collapse"
        className="custom-class"
        innerElement="p"
      />
      </div>
    </div>
  );
};

export default Stock;

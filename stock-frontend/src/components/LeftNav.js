import React from 'react';
import Searchable from 'react-searchable-dropdown';

import {leftNavStyling} from '../styles/LeftNavStyling'
const optionsArray = [
    {
        label: 'Gross Domestic Product',
    },
    {
        label: 'Industry'
    },
    {
        label: 'Private'
    },
    {
        label: 'Real'
    },
    {
        label: 'Private Industries'
    },
    {
        label: 'Gross State Product'
    },
    {
        label: 'Government'
    },
    {
        label: 'Services'
    },
    {
        label: 'Quantity Index'
    },
    {
        label: 'Goods'
    }
]

const LeftNav = ({ leftNav }) => {
  
    return (
        <div id = "leftNav" style = {leftNavStyling.leftNav}>
            <p id="title" style = {leftNavStyling.titleStyling}><b>Refine your search:</b></p>
            <hr style= {leftNavStyling.hrStyle}></hr>
            <b style = {leftNavStyling.conceptFilterStyle}>Concepts</b>
            <div style = {leftNavStyling.searchFilterStyle}>
                <Searchable
                    style = {leftNavStyling.style}
                    value="" //if value is not item of options array, it would be ignored on mount
                    placeholder="Search Options" // by default "Search"
                    notFoundText="No result found" // by default "No result found"
                    options={optionsArray}
                    listMaxHeight={700} //by default 140
                />
            </div>
        </div>
    );
  };

  export default LeftNav;
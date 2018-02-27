import React from 'react';

import BigSearch from './BigSearch';
import ResultGrid from './ResultGrid';


function SearchPage(props) {
    return (
        <div>
            <div className="component-outer">
                <div className="component-wrapper">
                    <BigSearch/>
                </div>
            </div>
            <div className="component-outer">
                <div className="component-wrapper">
                    <ResultGrid/>  
                </div>
            </div>
        </div>
    )
};

export default SearchPage;

import React from 'react';

import BigSearch from './BigSearch';
import ResultGrid from './ResultGrid';


function SearchPage(props) {
    return (
        <div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <BigSearch/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <ResultGrid/>  
                </div>
            </div>
        </div>
    )
};

export default SearchPage;

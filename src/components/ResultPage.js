import React from 'react';

import ResultPanel from './ResultPanel';
import ResultGrid from './ResultGrid';


function ResultPage(props) {
    return (
        <div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <ResultPanel/>
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

export default ResultPage;

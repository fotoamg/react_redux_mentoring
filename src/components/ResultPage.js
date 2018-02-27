import React from 'react';

import ResultPanel from './ResultPanel';
import ResultGrid from './ResultGrid';


function ResultPage(props) {
    return (
        <div>
            <div className="component-outer">
                <div>
                    <a href="top"></a>
                </div>
                <div className="component-wrapper">
                    <ResultPanel/>
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

export default ResultPage;

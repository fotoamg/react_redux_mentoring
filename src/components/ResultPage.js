import React from 'react';

import ResultPanel from './ResultPanel';
import EpisodeGrid from './EpisodeGrid';


function ResultPage(props) {
    return (
        <div>
            <div className="component-outer">
                <div className="component-wrapper">
                    <ResultPanel/>
                </div>
            </div>
            <div className="component-outer">
                <div className="component-wrapper">
                    <EpisodeGrid/>  
                </div>
            </div>
        </div>
    )
};

export default ResultPage;

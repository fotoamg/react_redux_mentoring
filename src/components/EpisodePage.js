import React from 'react';

import EpisodePanel from './EpisodePanel';
import EpisodeGrid from './EpisodeGrid';


function EpisodePage(props) {
    return (
        <div>
            <div className="component-outer">
                <div>
                    <a href="top"></a>
                </div>
                <div className="component-wrapper">
                    <EpisodePanel/>
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

export default EpisodePage;

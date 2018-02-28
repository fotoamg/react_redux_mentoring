import React from 'react';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import { GridItem } from './GridItem';

export function EpisodeGrid(props) {
    console.log("Resultgird props:", props);
    if (!props.results) {
        return <div className="resultgrid__noresult"> No films found </div>
    }

    const renderItems = () => props.results.filter(fitem => fitem.image != null && fitem.image.medium != null ).map((item, i) => <GridItem key={i} item={item}></GridItem>);
    let routePath = props.match.path;
    let title = <div className="resultgrid__resulttitle"> Episodes: </div>;
    
    return(
        <div className="resultgrid__outer-wrapper clearfix">
                <div className="resultgrid__inner-wrapper clearfix">
                    {title}
                    <div className="resultgrid__items-wrapper clearfix">
                        {renderItems()}
                    </div>
                </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
};

export default connect(mapStateToProps)(withRouter(EpisodeGrid));

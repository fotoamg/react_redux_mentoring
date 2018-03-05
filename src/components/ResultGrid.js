import React from 'react';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import { GridItem } from './GridItem';

export function ResultGrid(props) {
    console.log("Resultgird props:", props);
    if (!props.results) {
        return <div className="resultgrid__noresult"> No films found </div>
    }
    let routePath = props.match.path;
    let targetPage = "result";
    const renderItems = () => props.results.filter(fitem => fitem.show.image != null && fitem.show.image.medium != null ).map((item, i) => <GridItem key={i} item={item.show} page={targetPage}></GridItem>);
    
    let title = <div className="resultgrid__resulttitle"> {(routePath.indexOf("/search") === 0) ? " Results: " : ((routePath.indexOf("/result") === 0) ? " Related items: " : "") } </div>;
    
    return(
        <div className="resultgrid__outer-wrapper">
                <div className="resultgrid__inner-wrapper">
                    {title}
                    <div className="resultgrid__items-wrapper">
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

export default connect(mapStateToProps)(withRouter(ResultGrid));

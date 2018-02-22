import React from 'react';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import { ResultItem } from './ResultItem';

export function ResultGrid(props) {
    console.log("Resultgird props:", props);
    if (!props.results) {
        return <div className="resultgrid__item__wrapper__noresult"> No films found </div>
    }
    const renderItems = () => props.results.filter(fitem => fitem.poster_path != null).map((item, i) => <ResultItem key={i} item={item}></ResultItem>);
    let routePath = props.match.path;
    let title = <div className="resultgrid__item__wrapper__resulttitle"> {(routePath.indexOf("/search") == 0) ? " Results: " : ((routePath.indexOf("/result") == 0) ? " Related items: " : "") } </div>;
    
    return(
        <div className="resultgrid__wrapper clearfix">
                <div className="resultgrid__item__wrapper clearfix">
                    {title}
                    {renderItems()}
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

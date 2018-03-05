import React from 'react';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import { GridItem } from './GridItem';

class EpisodeGrid extends React.Component {
    constructor(props) {
        super(props);
        console.log("EpisodeGrid props:", props);
        this.nofound = <div className="resultgrid__noresult"> No episodes found </div>;
    }

    componentWillMount() {
        console.log("EpisodeGrid WILLLMOUNT props:", this.props);
        if (!this.props.results || (typeof this.props.results === "undefined")
         || (this.props.results.filter(fitem => fitem.image != null && fitem.image.medium != null ).length === 0 )
            ) {
                return this.nofound;
        }
    }


    render() {
        console.log("EpisodeGrid RENDER props:", this.props);
        if (!this.props.results || (typeof this.props.results === "undefined")
            || (this.props.results.filter(fitem => fitem.image != null && fitem.image.medium != null ).length === 0 )
           ) {
               return this.nofound;
        }

        let targetPage = "episode";
        const renderItems = () => this.props.results.filter(fitem => fitem.image != null && fitem.image.medium != null ).map((item, i) => <GridItem key={i} item={item} page={targetPage}></GridItem>);
        
        let title = <div className="resultgrid__resulttitle"> Episodes: </div>;
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
        };
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
};

export default connect(mapStateToProps)(withRouter(EpisodeGrid));

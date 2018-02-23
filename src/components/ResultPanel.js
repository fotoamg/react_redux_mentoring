import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import axios from 'axios';

class ResultPanel extends React.Component {
        constructor(props) {
            super(props);
            console.log("Resultpanel props:", props);
        }

        componentWillMount() {
            console.log("ResultPanel WillMount.. ");
            if ( this.props.match && this.props.match.params && this.props.match.params.resultId ) {
                console.log("ResultPanel WillMount: " + this.props.match.params.resultId);
                this.props.loadMovie(this.props.match.params.resultId);
            }
            
        }


        componentWillReceiveProps(nextProps) {
            console.log("ResultId toload props: " + this.props.match.params.resultId);
            console.log("ResultId toload NEXTprops: " + nextProps.match.params.resultId);
            if (nextProps && nextProps.match && nextProps.match.params && nextProps.match.params.resultId &&
                  this.props.match.params.resultId !== nextProps.match.params.resultId) {
                    console.log(" Nextprops not match by resultid! " + nextProps.match.params.resultId);
                    this.props.loadMovie(nextProps.match.params.resultId);
            }
          }

          shouldComponentUpdate() {
            console.log("ResultPanel shouldComponentUpdate. ");
            return true;
          }

    render() {
        if (!this.props.item) {
            console.log("Resultpanel no props item.");
            return <div>NO ITEMS</div>
        }
        return(
                <nav className="resultpanel clearfix">
                        <div className="resultpanel__wrapper clearfix">
                            <div className="resultpanel__wrapper__header clearfix">
                                <Link to="/">
                                    netflixroulette
                                </Link>
                            </div>
                            <div className="resultpanel__wrapper__leftpanel clearfix">
                                
                                <p>
                                    <img src={this.props.item.image.medium}
                                        width="185" alt={this.props.item.name}>                  
                                    </img>
                                </p>
                            </div>
                            <div className="resultpanel__wrapper__rightpanel clearfix">
                                
                                <p>
                                    <span className="resultpanel__wrapper__rightpanel__title">
                                        {this.props.item.name}
                                    </span>
                                        &nbsp;
                                    {this.props.item.rating.average ? <span className="resultpanel__wrapper__rightpanel__score">    &nbsp;{this.props.item.rating.average}&nbsp; </span> : ""}
                                </p>
                                <p>{this.props.item.premiered} &nbsp; {this.props.item.runtime}&nbsp;min</p>

                                <p>{this.props.item.summary}</p>


                                {/* <p>DEBUG: passed id for movie item: {this.props.match.params.resultId}</p>
                                <p>DEBUG: match: { JSON.stringify(this.props.match)}</p> */}
                                
                            </div>
                        </div>
                </nav>
        )
    };
}


const mapStateToProps = (state) => {
    return {
        item: state.item
    };
};

/*const getRelatedResults = (term) => {
    const url = `http://api.tvmaze.com/search/shows?q=${term}/episodes`;
    return axios.get(url)
};*/

const getSingleResults = (term) => {
    const url = `http://api.tvmaze.com/shows/${term}`;
    return axios.get(url)
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovie: (id) => {
            console.log("loadMovie ID: ", id);
            return getSingleResults(id).then(response => {
                console.log("MOVIE DATA:", response.data);
                dispatch({
                     type: "MOVIE_LOADED",
                     payload: response.data
                 });            
              });  
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultPanel));

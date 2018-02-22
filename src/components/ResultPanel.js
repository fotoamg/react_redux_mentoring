import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import { movieResult, relatedItems } from '../resultmock';

class ResultPanel extends React.Component {
        constructor(props) {
            super(props);
            console.log("Resultpanel props:", props);
        }

        componentWillMount() {
            console.log("ResultPanel WillMount.. ");
            if ( this.props.match && this.props.match.params && this.props.match.params.resultId ) {
                console.log("ResultPanel WillMount: " + this.props.match.params.resultId);
                this.props.loadMovie(
                    {   item: movieResult,
                        result: relatedItems.results
                    }
                );
            }
            
        }


        componentWillReceiveProps(nextProps) {
            console.log("ResultId toload props: " + this.props.match.params.resultId);
            console.log("ResultId toload NEXTprops: " + nextProps.match.params.resultId);
            if (nextProps && nextProps.match && nextProps.match.params && nextProps.match.params.resultId &&
                  this.props.match.params.resultId !== nextProps.match.params.resultId) {
                    console.log(" Nextprops not match by resultid! " + nextProps.match.params.resultId);
                    this.props.loadMovie(
                        {   item: movieResult,
                            result: relatedItems.results
                        }
                    );
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
                                    <img src={"http://image.tmdb.org/t/p/w185/" + this.props.item.poster_path}
                                        width="185" alt={this.props.item.title}>                  
                                    </img>
                                </p>
                            </div>
                            <div className="resultpanel__wrapper__rightpanel clearfix">
                                
                                <p>
                                    <span className="resultpanel__wrapper__rightpanel__title">
                                        {this.props.item.title}
                                    </span>
                                        &nbsp;
                                    <span className="resultpanel__wrapper__rightpanel__score">
                                        &nbsp;{this.props.item.vote_average}&nbsp;
                                    </span>
                                </p>
                                <p>{this.props.item.release_date} &nbsp; {this.props.item.runtime}&nbsp;min</p>

                                <p>{this.props.item.overview}</p>


                                <p>DEBUG: passed id for movie item: {this.props.match.params.resultId}</p>
                                <p>DEBUG: match: { JSON.stringify(this.props.match)}</p>
                                
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

  
 const mapDispatchToProps = (dispatch) => {
    return {
        loadMovie: (obj) => {
            console.log("loadMovie Action payload: ", obj);
            dispatch({
                type: "MOVIE_LOADED",
                payload: obj
            });

        }         
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultPanel));

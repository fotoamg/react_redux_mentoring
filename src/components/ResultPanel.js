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
          };

          renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

    render() {
        if (!this.props.item) {
            console.log("Resultpanel no props item.");
            return <div>NO ITEMS</div>
        }
        let cast = this.props.item._embedded ? this.props.item._embedded.cast : [];
        console.log("cast ", cast);
        return(
                <nav className="resultpanel clearfix">
                        <div className="resultpanel__wrapper clearfix">
                            <div className="resultpanel__header clearfix">
                                <Link to="/">
                                    netflixroulette
                                </Link>
                            </div>
                            <div className="resultpanel__leftpanel clearfix">
                                
                                <p>
                                    <img src={this.props.item.image.medium}
                                        width="99%" alt={this.props.item.name}>                  
                                    </img>
                                </p>
                            </div>
                            <div className="resultpanel__rightpanel clearfix">
                                
                                <p>
                                    <span className="resultpanel__title">
                                        {this.props.item.name}
                                    </span>
                                        &nbsp;
                                    {this.props.item.rating.average ? <span className="resultpanel__score">{this.props.item.rating.average}</span> : ""}
                                </p>
                                
                                <span className="resultpanel__time">
                                    <p>{(this.props.item.premiered) ? this.props.item.premiered.substr(0,4) : ""} &nbsp; {this.props.item.runtime}&nbsp;min</p>
                                </span>

                                <p>{this.renderHTML(this.props.item.summary)}</p>

                                <p>&nbsp;</p>
                                <p className="resultpanel__cast">
                                    {cast.length > 0 ? <span>Cast: </span> : ""}
                                    {cast.map((item, i) => <span key={i}> {item.person.name} &nbsp; </span>)}
                                </p>
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

const getEpisodes = (term) => {
    const url = `http://api.tvmaze.com/shows/${term}/episodes`;
    return axios.get(url)
};

const getSingleResults = (term) => {
    const url = `http://api.tvmaze.com/shows/${term}?embed=cast`;
    return axios.get(url)
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovie: (id) => {
            console.log("loadMovie ID: ", id);
            return getSingleResults(id).then(singleResult => Promise.all([singleResult, getEpisodes(id)]) )
            .then(results => {
                console.log("MOVIE LOAD DATA:", results);
                dispatch({
                     type: "MOVIE_LOADED",
                     payload: { movieResult: results[0].data,
                                episodes: results[1].data
                    }
                 });            
              });
              
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultPanel));

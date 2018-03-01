import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import axios from 'axios';

class EpisodePanel extends React.Component {
        constructor(props) {
            super(props);
            console.log("EpisodePanelprops:", props);
        }

        componentWillMount() {
            console.log("EpisodePanelWillMount.. ");
            if ( this.props.match && this.props.match.params && this.props.match.params.episodeId ) {
                console.log("EpisodePanelWillMount: " + this.props.match.params.episodeId);
                this.props.loadEpisode(this.props.match.params.episodeId);
            } else {
                console.log("EpisodePanelWillMount NO episodeID");
            }
            
        }


        componentWillReceiveProps(nextProps) {
            console.log("ResultId toload props: " + this.props.match.params.episodeId);
            console.log("ResultId toload NEXTprops: " + nextProps.match.params.episodeId);
            if (nextProps && nextProps.match && nextProps.match.params && nextProps.match.params.episodeId &&
                  this.props.match.params.episodeId !== nextProps.match.params.episodeId) {
                    console.log(" Nextprops not match by episode! " + nextProps.match.params.episodeId);
                    this.props.loadEpisode(nextProps.match.params.episodeId);
            } else {
                console.log("EpisodePanelWillReceiveProps NO different episode");
            }
          }

          shouldComponentUpdate() {
            console.log("EpisodePanel shouldComponentUpdate. ");
            return true;
          };

          renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

    render() {
        if (!this.props.item) {
            console.log("EpisodePanel no props item.");
            return <div>NO ITEMS</div>
        }

        return(
                <nav className="resultpanel">
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
                                    {(this.props.movie) ? <Link to={`/result/${this.props.movie.id}`}>   {"[" + this.props.movie.name + "]"} </Link> : ""}
                                    {this.props.item.name}
                                    </span>
                                </p>
                                
                                <span className="resultpanel__time">
                                    <p>{(this.props.item.airdate) ? this.props.item.airdate: ""} &nbsp; {(this.props.item.airtime) ? this.props.item.airtime: ""} &nbsp; {this.props.item.runtime}&nbsp;min</p>
                                </span>

                                <p>{this.renderHTML(this.props.item.summary)}</p>

                                <p>&nbsp;</p>
                                <p className="resultpanel__cast">
                                    <span>Season: {this.props.item.season}</span>,
                                    <span>Number: {this.props.item.number}</span>
                                </p>
                            </div>
                        </div>
                </nav>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        item: state.episode,
        movie: state.item
    };
};

const getEpisode = (term) => {
    const url = `http://api.tvmaze.com/episodes/${term}`;
    return axios.get(url)
};


const mapDispatchToProps = (dispatch) => {
    return {
        loadEpisode: (id) => {
            console.log("loadEpisode ID: ", id);
            return getEpisode(id).then(result => {
                console.log("episode LOAD DATA:", result.data);
                dispatch({
                     type: "EPISODE_LOADED",
                     payload: result.data
                 });            
              });
              
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EpisodePanel));

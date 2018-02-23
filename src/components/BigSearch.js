import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import axios from 'axios';

class BigSearch extends React.Component {
    constructor(props) {
        super(props);
        console.log("props:", props);
        this.state = {
            searchValue: props.searchValue
        };
    }

    componentWillMount() {
        console.log("BigSearch WillMount.. ");
        if ( this.props.match && this.props.match.path ) {
            console.log("BigSearch match: ", this.props.match);
            this.props.initState();
        }
        
    }

    handleSearchValueChange(event) {
        console.log('search value changed', this.state, event);
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return(
            <nav className="bigsearch clearfix">
                <div className="container clearfix">
                    <div className="bigsearch__wrapper clearfix">
                        <div className="bigsearch__wrapper__header clearfix">
                            <Link to="/">
                                netflixroulette
                            </Link>
                        </div>
                        <div className="bigsearch__wrapper__searchbar clearfix">
                            <p>FIND YOUR MOVIE</p>
                            <p>
                                <input type="text"
                                    value={this.state.searchValue} onChange={(event) => this.handleSearchValueChange(event)}></input>
                            </p>
                            <p>
                                <button onClick={(event) => this.props.searchClick(this.state.searchValue)}>
                                    <Link to={`/search/${this.state.searchValue}`}>SEARCH</Link>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.searchValue
    };
};

const getSearchResults = (term) => {
    const url = `http://api.tvmaze.com/search/shows?q=${term}`;
    return axios.get(url)
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        searchClick: (title) => {
            console.log("title: " + title);
            return getSearchResults(title).then(response => {
                console.log(response.data);
                dispatch({
                     type: "SEARCH",
                     payload: response.data
                 });            
              });
          },
          initState: () => {
            console.log("Bigsearch initState: ");
            dispatch({
                type: "INIT_STATE",
                payload: {}
            });
        }         
      };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BigSearch));

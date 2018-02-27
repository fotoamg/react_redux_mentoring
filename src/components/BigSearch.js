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

    handleSearchValueKeyDown(event) {
        console.log('search value keydown', this.state, event, event.key);
        const { history } = this.props;
        if (event.key === 'Enter') {
            console.log('search value Enter preshed searchValue: ' + this.state.searchValue);
            this.props.searchClick(this.state.searchValue);
            history.push('/search/' + this.state.searchValue);
        }
     
    }

    render() {
        return(           
            <div className="bigsearch">
                <div className="bigsearch__wrapper clearfix">
                    <div className="bigsearch__header clearfix">
                        <Link to="/">
                            netflixroulette
                        </Link>
                    </div>
                    <div className="bigsearch__searchbar clearfix">
                        <p>FIND YOUR MOVIE</p>
                        <p>
                            <input type="text"
                                value={this.state.searchValue} onChange={(event) => this.handleSearchValueChange(event)}
                                onKeyDown={(event) => this.handleSearchValueKeyDown(event)}></input>
                        </p>
                        <p>
                            <button onClick={(event) => this.props.searchClick(this.state.searchValue)}>
                                <Link to={`/search/${this.state.searchValue}`}>SEARCH</Link>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
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

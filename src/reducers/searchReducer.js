export const initialState =  { searchValue: 'girl' };

const searchReducer = (state = {...initialState} , action) => {
    switch (action.type) {
        case "SEARCH":
            console.log("SEARCH reducer", action.payload);
            state = {...state};
            state.results = action.payload;
            break;
        case "MOVIE_LOADED":
            console.log("MOVIE_LOADED reducer", action.payload);
            state = {...state};
            state.item = action.payload.movieResult;
            state.results = action.payload.episodes;
            break;
        case "INIT_STATE":
            console.log("INIT_STATE reducer", action.payload);
            state = {...initialState};
            break;
    }
    return state;
};

export default searchReducer;

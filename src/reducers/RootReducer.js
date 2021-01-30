const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const GET_QUOTE_IN_PROGRESS = "GET_QUOTE_IN_PROGRESS";
const GET_QUOTE_DONE = "GET_QUOTE_DONE";
const initialUserState = {
    favorites: []
}

const RootReducer = (state = initialUserState, action) => {
   
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            return Object.assign({}, state, {
                favorites: state.favorites.concat(action.payload)
              });
        }
        case GET_QUOTE_IN_PROGRESS: {
            return { ...state, ...{ loading: true } };
        }
        case GET_QUOTE_DONE: {
            return { ...state, ...{ loading: false, status: action.payload } };
        }
        default: {
            return state
        }
    }
}

export default RootReducer
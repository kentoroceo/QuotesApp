const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const GET_QUOTE_IN_PROGRESS = "GET_QUOTE_IN_PROGRESS";
const GET_QUOTE_DONE = "GET_QUOTE_DONE";

export function AddToFavorites(payload) {
    alert("Added to Favorites!")
    return { type: ADD_TO_FAVORITES, payload }
};

export function GetQuoteInProgress() {
    return { type: GET_QUOTE_IN_PROGRESS }
};

export function GetQuoteDone(payload) {
    return { type: GET_QUOTE_DONE, payload}
};




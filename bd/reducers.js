import {
    ADD_BOOK,
    GET_INFO,
    GET_IMAGES
} from './actions';

const initialState = {
    books: [],
    booksData: [],
    images: [],
    booksInfo: [],
};

function booksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                booksData: action.payload
            };
        case GET_INFO:
            return {
                ...state,
                booksInfo: action.payload,
            };
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
            };
        default:
            return state;
    }
}

export default booksReducer

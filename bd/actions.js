export const ADD_BOOK = 'ADD_BOOK';
export const GET_INFO = 'GET_INFO';
export const GET_IMAGES = 'GET_IMAGES';

export const addBook = book => dispatch => {
    dispatch({
        type: ADD_BOOK,
        payload: book
    });
};

export const addFullInfo = info => dispatch => {
    dispatch({
        type: GET_INFO,
        payload: info
    });
};

export const addImagesToStorage = img => dispatch => {
    dispatch({
        type: GET_IMAGES,
        payload: img
    });
};

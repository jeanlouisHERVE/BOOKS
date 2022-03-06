import fetchActionTypes from '../fetchActionTypes'
import axios from 'axios';

export const fetchBookLoading = () => {
    return {
        type: fetchActionTypes.FETCH_BOOKS_LOADING,
    }
}

export const fetchBookSuccess = data => {
    return {
        type: fetchActionTypes.FETCH_BOOKS_SUCCESS,
        payload: data // object
    }
}

export const fetchBookFail = error => {
    return {
        type: fetchActionTypes.FETCH_BOOKS_FAIL,
        payload: error
    }
}

const GOOGLE_API_KEY = 'AIzaSyDgw2HMEPOxJ7AtOpETPaBkNmEA6H5-C5g';

export const fetchBooks = title => {
    return dispatch => {

        dispatch(fetchBookLoading())

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20&key=${GOOGLE_API_KEY}`)
        .then( res => {
            console.log(res)
            const booksItemsArray = res.data.items;
            console.log(booksItemsArray)
            dispatch(fetchBookSuccess(booksItemsArray));
        })
        .catch( error => {
            dispatch(fetchBookFail(error.message));
        })
    }

}
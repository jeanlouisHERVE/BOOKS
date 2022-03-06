import bookActionTypes from '../types'

export const addBook = data => {
    return {
        type: bookActionTypes.ADD_BOOKS,
        payload: data // object
    }
}
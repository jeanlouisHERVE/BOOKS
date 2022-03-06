import bookActionTypes from '../bookActionTypes'


export const addBook = data => {
    return {
        type: bookActionTypes.ADD_BOOKS,
        payload: data // object
    }
}

export const removeBook = id => {
    return {
        type: bookActionTypes.REMOVE_BOOK,
        payload: id // object
    }
}

export const removeAllBooks = id => {
    return {
        type: bookActionTypes.REMOVE_ALL_BOOKS,
    }
}
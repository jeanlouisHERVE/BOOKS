import fetchActionTypes from '../fetchActionTypes';


const initialState = {
    isLoading: false,
    fetchedBooks: [], 
    error: ""
}

//reducer 
const reducerFetchedBooks = (state = initialState, action) => {

    switch (action.type){
        case fetchActionTypes.FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case fetchActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: action.payload, 
                error: ""
            }

        case fetchActionTypes.FETCH_BOOKS_FAIL:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: [], 
                error: action.payload
            }
        
        default :
        return state;
    }
}
        


export default reducerFetchedBooks;
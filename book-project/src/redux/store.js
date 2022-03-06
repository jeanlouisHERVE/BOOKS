import {createStore, combineReducers, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import reducerAddBooks from './reducers/reducerAddbook';
import reducerFetchedBooks from './reducers/reducerFetchBooks';
//pour utiliser redux dev tools 
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    library: reducerAddBooks,
    search: reducerFetchedBooks
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

import {createStore, combineReducers, applyMiddleware, } from 'redux';
// import thunk from 'redux-thunk';
import reducerAddBooks from './reducers/reducerAddbook';
//pour utiliser redux dev tools 
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    library: reducerAddBooks,
})

const store = createStore(rootReducer);

export default store;

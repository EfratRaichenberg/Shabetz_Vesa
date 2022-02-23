import { createStore } from 'redux';
import userReducer from './userReducer';
import StateLoader from "./stateLoader"

const stateLoader = new StateLoader();

let store = createStore(userReducer, stateLoader.loadState());

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

export default store;

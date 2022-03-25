import {createStore, applyMiddleware, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './Reducer/user';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
let rootReducer = combineReducers({
  userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};

import { combineReducers } from 'redux';
import shopInfo from './reducer.js';

// Данная функция берёт два хранилища и мёржит их. Но т.к. у нас нет других хранилищ, то передаю один стейт.

const rootReducer = combineReducers({ shopInfo });

export default rootReducer;
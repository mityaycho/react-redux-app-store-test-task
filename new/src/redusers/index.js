import { combineReducers } from 'redux';
import shopInfo from './info.js';

// Данная функция берёт два объекта и мёржит их.

const rootReducer = combineReducers({
	shopInfo
});

export default rootReducer;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redusers/index.js';

// Здесь создаю новую переменную, куда передаю первым аргументом функцию смёрженную комбайнером. 
// Вторым аргументом передаю для расширения в Хром событие виндоу. 
// Чтобы в расширении браузера можно было дебажить код. 
// Сам компонент реакта, оборачиваю в Провайдер, который собственно и прокидывает хранилище в ДОМ.
// В провайдер передаю наш стор или стейт (хранилище данных).

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
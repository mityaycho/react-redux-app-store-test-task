import store from '../store/state.js';

// Здесь обрабатываю событие с помощи свитча. Функция принимает два значения хранилище данных и событие. 
// Хранилище с помощью новой фичи ес6, оборачиваю прямо в передаче событий, функции. 
// Если экшн из экшн стейт совпадает со значением свитча, то так же с помощью новой фичи ес6 (...стейт).
// Передаю все значения базы данных и передаю вторым значением что нужно изменить и вывожу два объекта.

function shopInfo(state = store, action) {
	switch (action.type) {
		case 'CHANGE_BOOL_CHECKED':
			return {
				...state,
				addToCart: action.payload.arrIdx, id: action.payload.checkBull
			};
		default :
		return state;
	}
}

export default shopInfo;
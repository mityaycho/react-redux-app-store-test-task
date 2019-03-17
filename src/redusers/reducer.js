import store from '../store/state.js';

// Здесь обрабатываю событие с помощи свитча. Функция принимает два значения хранилище данных и событие. 
// Хранилище с помощью новой фичи ес6, оборачиваю прямо в передаче событий, функции. 
// Если экшн из экшн стейт совпадает со значением свитча, то так же с помощью новой фичи ес6 (...стейт).
// Передаю все значения базы данных и передаю вторым значением что нужно заменить и вывожу два объекта.

function shopInfo(state = store, action) {
	if (!action.payload) {
		return state;
	};

	const {type, payload} = action;
	const {arrIdx, quantity} = payload;

	switch (type) {
		case 'CHANGE_CHECKED':
			const temp = Object.values(state.items).map(el => el.id === Number(arrIdx) ? {...el, addToCart: !el.addToCart} : el);

			return {
				...state,
				items: {...temp},
				quantity 
			};

		default:
		return state;
	}
}

export default shopInfo;
let store = {
	state: [
		{
			id: 1,
			number: '1',
			title: 'Супер-товар',
			rating: '2.87',
			trend: '-',
			priceSegment: 'нереально дорого',
			customerReviews: '5',
			addToCart: false
		}, {
			id: 2,
			number: '2',
			title: 'Тоже хороший товар',
			rating: '1.94',
			trend: '+14',
			priceSegment: 'очень дорого',
			customerReviews: '',
			addToCart: false
		}, {
			id: 3,
			number: '3',
			title: 'Неплохой товар',
			rating: '1.69',
			trend: '+4',
			priceSegment: 'можно потянуть',
			customerReviews: '',
			addToCart: false
		}
	]
};

export default store;
// Здесь код, хранилище, что я ещё рассматривал для хранения. 
// Так же пытался с массивом объектов. Но всё равно что то делаю не так.
// Скорее всего ошибка в передаче данных в редакс, но пока не понял где.
// let store = {
// 	1: {
// 		id: 1,
// 		number: '1',
// 		title: 'Супер-товар',
// 		rating: '2.87',
// 		trend: '-',
// 		priceSegment: 'нереально дорого',
// 		customerReviews: '5',
// 		addToCart: false
// 	},
// 	2: {
// 		id: 2,
// 		number: '2',
// 		title: 'Тоже хороший товар',
// 		rating: '1.94',
// 		trend: '+14',
// 		priceSegment: 'очень дорого',
// 		customerReviews: '',
// 		addToCart: false
// 	},
// 	3: {
// 		id: 3,
// 		number: '3',
// 		title: 'Неплохой товар',
// 		rating: '1.69',
// 		trend: '+4',
// 		priceSegment: 'можно потянуть',
// 		customerReviews: '',
// 		addToCart: false
// 	}
// };
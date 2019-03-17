import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Здесь создаю класс для удобства работы с событиями в полях инпутов.
// С помощью конструктора создаю счётик кликов и ставлю его на ноль по умолчанию.
// Далее идёт функция обработчик события клика на инпуте. 
// Сама функция принимает событие и прокидывает его дальше диспатчером в редьюсер для изменения сотсояния стейта.
// Так же здесь меняется состояние стейта конструктора, для отображения количества кликов (товаров).
// Дальше функция для отрисовки одного из блока ДОМ дерева. Мепом пробегаемся по массиву и на каждой итерации, создаём новый блок.
// Следующая функция отслеживает состояние стейта и в зависимости от этого выдаёт блок кода для отрисовки в ДОМ дереве.
// Ну и в рендере у нас выводится блок для ДОМ дерева, где запускает обе предыдущие функции.

class Goods extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	shopCounter(event) {
		if (event.target.checked) {
			this.setState({
				count: this.state.count + 1
			})
			// return this.props.state.setChangeToCheckedFunction({ type: 'CHANGE_BOOL_CHECKED', arrIdx: event.target.value, checkBull: event.target.checked });
		} else if (!event.target.checked) {
			this.setState({
				count: this.state.count - 1
			})
		}
	}

	positionsState() {
		return (
			this.props.state.state.state.map(el => (
				<tr key={el.id}>
					<th>{el.number}</th>
					<th>{el.title}</th>
					<th>{el.rating}</th>
					<th>{el.trend}</th>
					<th>{el.priceSegment}</th>
					<th>{el.customerReviews}</th>
					<th>
						<div className="page__toggle">
							<label className="toggle">
								<input className="toggle__input" type="checkbox" onChange={(event) => this.shopCounter(event)} value={el.number} />
								<span className="toggle__label">
									<span className="toggle__text"></span>
								</span>
							</label>
						</div>
					</th>
				</tr>
			))
		);
	}

	buttonCart() {
		switch (this.state.count) {
			case 0:
				return (
					<div className="button-goods">
						<p align="center">
							<Link className="cart-page" to="/shopping_cart">Пожалуйста, отметьте галочками несколько товаров</Link>
						</p>
					</div>
				)

			default:
				return (
					<div className="button-goods-active">
						<div className="chosen-cart" align="center">Вы выбрали <div className="position-number">{this.state.count}</div> товар</div>
						<Link className="cart-page-active" to="/shopping_cart">ПЕРЕЙТИ В КОРЗИНУ</Link>
					</div>
				)
		}
	}
	// Не понимаю, почему приходит иной раз два массива сразу. Явно что то не так предаю в редакс, или вызываю.
	// В этой функции пытался понять как можно применить объект с данными.
	// iterationObj() {
	// 	for (let i=0; i < 3; i++) {
	// 		console.log(i)
	// 		for (let key in this.props.state.state[++i]) {
	// 			console.log(key);
	// 		}
	// 	}
	// }
	render() {
		return (
			<div>
				{/* {console.log(this.props)} */}
				{/* {this.iterationObj()} */}
				<section>
					<h1>Список товаров</h1>
					<table className="shoping-cart" width="100%">
						<tbody>
							<tr>
								<th><a href="#a">#</a></th>
								<th><a href="#a">Название</a></th>
								<th><a href="#a">Рейтинг</a></th>
								<th><a href="#a">Тренд</a></th>
								<th><a href="#a">Ценовой сегмент</a></th>
								<th><a href="#a">Отзывы покупателей</a></th>
								<th><Link className="page-cart" to="/shopping_cart">В корзину</Link></th>
							</tr>
							{this.positionsState()}
						</tbody>
					</table>
				</section>
				{this.buttonCart()}
			</div>
		);
	}
};

export default Goods;
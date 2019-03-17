import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import setChangeToChecked from '../actions/actionState.js';

// Здесь создаю класс для удобства работы с событиями в полях инпутов.
// Далее идёт функция обработчик события клика на инпуте. 
// Сама функция принимает событие и прокидывает его дальше диспатчером в редьюсер для изменения сотсояния стейта.
// Дальше функция для отрисовки одного из блока ДОМ дерева. Мaпом пробегаемся по массиву и на каждой итерации, создаём новый блок.
// Следующая функция отслеживает состояние стейта и в зависимости от этого выдаёт блок кода для отрисовки кнопки в ДОМ дереве.
// В рендере у нас выводится блок для ДОМ дерева, где запускает обе предыдущие функции.
// Дальше идут две функции, которые обрабатывают стейт. Первая мапит стейт в ДОМ. 
// Вторая функция, это так называемый диспетчер событий. Эта функция принимет события из дома и передаёт их в экшен.
// И на последок проверяю какие данные приходят с помощью пропТайпс.
// В конце подключаю наш стор и диспатчер с домом, с помощью функции редакса (connect).

class Goods extends Component {

	setChange(event) {
		const { setChangeToCheckedFunction, state } = this.props;
		const counter = event.target.checked ? state.quantity + 1 : state.quantity - 1;
		const value = event.target.value;

		setChangeToCheckedFunction({
			type: 'CHANGE_CHECKED',
			arrIdx: value,
			quantity: counter
		});
	}

	positionsState() {
		const { state } = this.props;
		const goodsArray = Object.values(state.items);
		
		return (
			goodsArray.map(el => (
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
								<input 
									className="toggle__input" 
									type="checkbox" 
									onChange={(event) => this.setChange(event)} 
									value={el.id} 
									checked={el.addToCart} 
									/>
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
		const { state } = this.props;
		const description = state.quantity === 1 ? 'товар' : 'товара';
		
		switch (state.quantity) {
			case 0:
			return (
				<div className="button-goods">
						<p align="center">
							Пожалуйста, отметьте галочками несколько товаров
						</p>
					</div>
				);
				
				default:
				return (
					<div className="button-goods-active">
					<div className="chosen-cart" align="center">
						Вы выбрали
						<div className="position-number">
							{state.quantity}
						</div>
						{` ${description}`}
					</div>
					<Link className="cart-page-active" to="/shopping_cart">ПЕРЕЙТИ В КОРЗИНУ</Link>
				</div>
			);
		}
	}
	
	render() {
		return (
			<div>
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
								<th><a href="#a">В корзину</a></th>
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

function mapStateToProps(state) {
	return { state: state.shopInfo };
}

function mapDispatchToProps(dispatch) {
	return { setChangeToCheckedFunction: check => { dispatch(setChangeToChecked(check)) } };
}

Goods.propTypes = {
	id: PropTypes.number,
	number: PropTypes.string,
	title: PropTypes.string,
	rating: PropTypes.string,
	trend: PropTypes.string,
	priceSegment: PropTypes.string,
	customerReviews: PropTypes.string,
	addToCart: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods);
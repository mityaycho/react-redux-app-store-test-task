import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import promo from '../img/img_promo.jpg';

// Вторая страница СинглПейдАпликейшн. Здесь всё сделал до возможности просто.

let titleChecked = '';

const resetChecked = () => {
	titleChecked = '';
}

const ShopingCart = (props) => {
	const shopingCartArray = Object.values(props.state.items);
	const titleEnding = props.state.quantity <= 1 ? 'товар' : 'товара';

	shopingCartArray.map((el) => {
		if (el.addToCart) {
			titleChecked === '' ? titleChecked += el.title : titleChecked += `, ${el.title}`;
		};
		return titleChecked;
	});

	return (
		<div>
			<section>
				<h1>Ваши товары</h1>
				<p className="positions-chosen">
					{`Вы выбрали ${props.state.quantity} ${titleEnding}: `}
					<strong>{`${titleChecked}.`}</strong>
				</p>
				<h3 className="poster">Преимущества покупок у нас</h3>
				<img src={promo} width="100%" alt="Промоакция" />
			</section>
			<div className="button-cart">
				<p align="center"><Link className="back-page" to="/" onClick={resetChecked}>Вернуться к покупкам</Link></p>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { state: state.shopInfo };
}

export default connect(mapStateToProps)(ShopingCart);
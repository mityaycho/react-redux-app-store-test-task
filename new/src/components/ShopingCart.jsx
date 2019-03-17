import React from 'react';
import { Link } from 'react-router-dom';

import promo from '../img/img_promo.jpg';

// Вторая страница нашего СинглПейдАпликейшн. Здесь всё сделал до возможности просто.
// Потому что всё время ушло на понимание и осваивание Редакс.
// За три дня понять работу библиотеки с нуля, для меня это новый рекорд)
// Спасибо, что посмотриле мой код. Я только учусь и прошу сильно не пинать за ошибки.
// Но я всегда слушаю конструктивную критику и стараюсь как можно быстрее их внести в свой код.
// Очень надеюсь, в случае отказа моей кандидатуры, что вы так же подробно опишите, ошибки в коде...
// Спасибо.

const ShopingCart = (props) => {
	return (
		<div>
			<section>
				<h1>Ваши товары</h1>
				<p className="positions-chosen">
					{`Вы выбрали ${props.state.state.state[0].number} товар`}
				</p>
				<h3 className="poster">Преимущества покупок у нас</h3>
				<img src={promo} width="100%" alt="Промоакция" />
			</section>
			<div className="button-cart">
				<p align="center"><Link className="back-page" to="/">Вернуться к покупкам</Link></p>
			</div>
		</div>
	);
};

export default ShopingCart;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Goods from './Goods.jsx';
import ShopingCart from './ShopingCart.jsx';

// Здесь у нас всё Реакт)
// Здесь я создаю умный компонент, который рендерит все события. 
// Всё дерево нашего проекта оборачиваю в специальную функцию, которая отслеживает активные страницы.
// С помощью свитча реакт переключает с одной ссылки на другую.
// В тело второй страницы прокидываю стейт, чтобы дети видели от родителей данные.

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<hr />
					<div className="App">
						<Switch>
							<Route exact path="/" component={Goods} />
							<Route path="/shopping_cart" component={ShopingCart} />
						</Switch>
					</div>
					<hr />
				</div>
			</BrowserRouter>
		);
	}
};
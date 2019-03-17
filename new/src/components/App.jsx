import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Goods from './Goods.jsx';
import ShopingCart from './ShopingCart.jsx';
import setChangeToChecked from '../actions/actionState.js'

// Здесь у нас всё Реакт)
// Здесь я создаю умный компонент, который рендерит все события. 
// Всё дерево нашего проекта оборачиваю в специальную функцию, которая отслеживает активные страницы.
// С помощью свитча реакт переключает с одной ссылки на другую.
// В тело каждой страницы прокидываю стейт, чтобы все дети видели от родителей данные.
// Дальше идут две функции, которые обрабатывают стейт. Первая мапит стейт в ДОМ. 
// Вторая функция, это так называемый диспетчер событий. Эта функция принимет события из дома и передаёт их в экшен.
// Последняя коннектит наш стор и диспатчер с домом.

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<hr />
					<div className="App">
						<Switch>
							<Route exact path="/" render={() => <Goods state={this.props} setCheck={this.props.setChangeToCheckedFunction} />} />
							<Route path="/shopping_cart">
								<ShopingCart state={this.props} />
							</Route>
						</Switch>
					</div>
					<hr />
				</div>
			</BrowserRouter>
		);
	}
};

function mapStateToProps (state) {
	console.log(state)
	return { state: state.shopInfo };
}

function mapDispatchToProps (dispatch) {
	return {
		setChangeToCheckedFunction: check => {	dispatch(setChangeToChecked(check))	}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
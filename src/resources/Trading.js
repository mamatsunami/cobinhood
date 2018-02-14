import Resource from './Resource';

export default class Market extends Resource {
	constructor(config) {
		super(config);

		this.config.baseUrl += '/trading';
	}

	getOrder(orderId) {
		return this['get'](`${this.config.baseUrl}/orders/${orderId}`);
	}

	getTradesOfAnOrder(orderId) {
		return this['get'](`${this.config.baseUrl}/orders/${orderId}/trades`);
	}

	getAllOrders(queryParams) {
		return this['get'](`${this.config.baseUrl}/orders`, {
			params: queryParams
		});
	}

	placeOrder(order) {
		return this['post'](`${this.config.baseUrl}/orders`, order);
	}

	modifyOrder(orderId, toUpdate) {
		return this['put'](`${this.config.baseUrl}/orders/${orderId}`, null, {
			params: toUpdate
		});
	}

	cancelOrder(orderId) {
		return this['delete'](`${this.config.baseUrl}/orders/${orderId}`);
	}

	getOrderHistory(queryParams) {
		return this['get'](`${this.config.baseUrl}/order_history`, {
			params: queryParams
		});
	}

	getTrade(tradeId) {
		return this['delete'](`${this.config.baseUrl}/trades/${tradeId}`);
	}

	getTradeHistory(queryParams) {
		return this['get'](`${this.config.baseUrl}/trades`, {
			params: queryParams
		});
	}
}

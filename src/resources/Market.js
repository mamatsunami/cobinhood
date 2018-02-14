import Resource from './Resource';

export default class Market extends Resource {
	constructor(config) {
		super(config);

		this.config.baseUrl += '/market';
	}

	getAllCurrencies() {
		return this['get'](`${this.config.baseUrl}/currencies`);
	}

	getAllTradingPairs() {
		return this['get'](`${this.config.baseUrl}/trading_pairs`);
	}

	getOrderBook(tradingPairId, queryParams) {
		return this['get'](
			`${this.config.baseUrl}/orderbooks/${tradingPairId}`,
			{ params: queryParams }
		);
	}

	getTradingStatistics() {
		return this['get'](`${this.config.baseUrl}/stats`);
	}

	getTicker(tradingPairId) {
		return this['get'](`${this.config.baseUrl}/tickers/${tradingPairId}`);
	}

	getRecentTrades(tradingPairId, queryParams) {
		return this['get'](`${this.config.baseUrl}/trades/${tradingPairId}`, {
			params: queryParams
		});
	}
}

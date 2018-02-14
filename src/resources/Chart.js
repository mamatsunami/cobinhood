import Resource from './Resource';

export default class Market extends Resource {
	constructor(config) {
		super(config);

		this.config.baseUrl += '/chart';
	}

	getCandles(tradingPairId, queryParams) {
		return this['get'](`${this.config.baseUrl}/candles/${tradingPairId}`, {
			params: queryParams
		});
	}
}

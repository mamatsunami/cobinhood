import Chart from './resources/Chart';
import Market from './resources/Market';
import Trading from './resources/Trading';
import Wallet from './resources/Wallet';

export default class Cobinhood {
	constructor(config) {
		this.config = Object.assign(
			{
				token: null,
				baseUrl: 'https://api.cobinhood.com/v1'
			},
			config
		);
	}

	get market() {
		return new Market(this.config);
	}

	get chart() {
		return new Chart(this.config);
	}

	get trading() {
		return new Trading(this.config);
	}

	get wallet() {
		return new Wallet(this.config);
	}
}

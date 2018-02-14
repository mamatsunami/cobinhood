import Cobinhood from './src';

const cobinhood = new Cobinhood({ token: process.env.TOKEN });

cobinhood.wallet
	.getWalletBalances()
	.then(response => {
		console.info(response);
	})
	.catch(error => {
		console.error(error);
	});

cobinhood.market
	.getOrderBook('COB-BTC')
	.then(response => {
		console.info(response);
	})
	.catch(error => {
		console.error(error);
	});

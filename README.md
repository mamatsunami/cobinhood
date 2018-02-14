# Cobinhood API Node.js Client

A simple Node.js client to interact with [Cobinhood RESTful API](https://cobinhood.github.io/api-public/) v1.

## Usage

```javascript
// instantiate an client instance
const cobinhood = new Cobinhood({ token: "YOUR_TOKEN" });

/*
 * then, follow Cobinhood API Documentation sections and method summaries
 * all calls return a Promise
 *
 * here is some examples :
 */

// https://cobinhood.github.io/api-public/#get-recent-trades
cobinhood.market.getRecentTrades('COB-BTC', { limit: 50, page: 3 })
	.then(response => {})
	.catch(error => {});

// https://cobinhood.github.io/api-public/#get-all-orders
cobinhood.trading.getAllOrders({ trading_pair_id: 'COB-BTC', limit: 10 })
	.then(response => {})
	.catch(error => {});

// https://cobinhood.github.io/api-public/#place-order
cobinhood.trading.placeOrder({
    "trading_pair_id": "BTC-USD",
    "side": "bid",
    "type": "limit",
    "price": "5000.01000000",
    "size": "1.0100"
})
	.then(response => {})
	.catch(error => {});

// https://cobinhood.github.io/api-public/#get-wallet-balances
cobinhood.wallet.getWalletBalances()
	.then(response => {})
	.catch(error => {});

```

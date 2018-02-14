import Resource from './Resource';

export default class Market extends Resource {
	constructor(config) {
		super(config);

		this.config.baseUrl += '/wallet';
	}

	getWalletBalances() {
		return this['get'](`${this.config.baseUrl}/balances`);
	}

	getLedgerEntries(queryParams) {
		return this['get'](`${this.config.baseUrl}/ledger`, {
			params: queryParams
		});
	}

	getDepositAddresses(queryParams) {
		return this['get'](`${this.config.baseUrl}/deposit_addresses`, {
			params: queryParams
		});
	}

	getWithdrawallAddresses(queryParams) {
		return this['get'](`${this.config.baseUrl}/withdrawal_addresses`, {
			params: queryParams
		});
	}

	getWithdrawal(withdrawalId) {
		return this['get'](
			`${this.config.baseUrl}/withdrawals/${withdrawalId}`
		);
	}

	getAllWithdrawals(queryParams) {
		return this['get'](`${this.config.baseUrl}/withdrawals`, {
			params: queryParams
		});
	}

	getDeposit(depositId) {
		return this['get'](`${this.config.baseUrl}/deposits/${depositId}`);
	}

	getAllDeposits() {
		return this['get'](`${this.config.baseUrl}/deposits`);
	}
}

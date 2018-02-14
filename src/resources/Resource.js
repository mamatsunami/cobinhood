import axios from 'axios';

export default class Http {
	constructor(config) {
		this.config = Object.assign({}, config);
		this.axios = axios.create();

		if (this.config.token)
			this.axios.defaults.headers.common[
				'Authorization'
			] = this.config.token;
	}

	['get'](url, config) {
		return new Promise((resolve, reject) => {
			this.axios
				.get(url, config)
				.then(response => {
					resolve(response.data.result);
				})
				.catch(error => {
					error.response && reject(error.response.data.error);
					reject(error);
				});
		});
	}

	['post'](url, data, config) {
		if (!config.headers) config.headers = {};
		config.headers.nonce = Date.now();

		return new Promise((resolve, reject) => {
			this.axios
				.post(url, data, config)
				.then(response => {
					resolve(response.data.result);
				})
				.catch(error => {
					error.response && reject(error.response.data.error);
					reject(error);
				});
		});
	}

	['put'](url, data, config) {
		if (!config.headers) config.headers = {};
		config.headers.nonce = Date.now();

		return new Promise((resolve, reject) => {
			this.axios
				.post(url, data, config)
				.then(response => {
					resolve(response.data.result);
				})
				.catch(error => {
					error.response && reject(error.response.data.error);
					reject(error);
				});
		});
	}

	['delete'](url, data, config) {
		if (!config.headers) config.headers = {};
		config.headers.nonce = Date.now();

		return new Promise((resolve, reject) => {
			this.axios
				.delete(url, config)
				.then(response => {
					resolve(response.data.result);
				})
				.catch(error => {
					error.response && reject(error.response.data.error);
					reject(error);
				});
		});
	}
}

let fetch = require("node-fetch");
let { ParamError, APIError } = require('../errors/Errors.js');

module.exports = class Catalog {
	constructor(options = {}){
		this.options = options;
	}
	async getData(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgot the vk_user_id parameter!"
			});
		};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.getData?token=${this.options.token}&vk_user_id=${params.vk_user_id}`)).json();
         if (result.error) {
			throw new APIError({
				code: result.error.error_code,
				message: result.error.error_message
			});
		};
	return result;
	}
	async setCallbackServer(params) {
			if (!params.vk_user_id) {
				throw new ParamError({
                      code: 1
                      message: "You forgot the vk_user_id parameter!"
				});
			};
			if (!params.url) {
				throw new ParamError({
					code: 2,
					message: "You forgot the url parameter!"
				});
			};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setCallbackServer?token=${this.options.token}&vk_user_id=${params.vk_user_id}&url=${encodeURIComponent(params.url)}`)).json();
		if (result.error) {
			throw new APIError({
				code: result.error.error_code,
				message: result.error.error_message
			});
		};
	return result;
	}
	async setTitle(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgot the vk_user_id parameter!"
			});
		};
		if (!params.title) {
				throw new ParamError({
					code: 2,
					message: "You forgot the title parameter!"
				});
			};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setTitle?token=${this.options.token}&vk_user_id=${params.vk_user_id}&title=${encodeURIComponent(params.title)}`)).json();
		if (result.error) {
			throw new APIError({
				code: result.error.error_code,
				message: result.error.error_message
			});
		};
	return result;
	}
	async setStatus(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgot the vk_user_id parameter!"
			});
		};
		if (!params.status) {
				throw new ParamError({
					code: 2,
					message: "You forgot the status parameter!"
				});
			};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setStatus?token=${this.options.token}&vk_user_id=${params.vk_user_id}&status=${encodeURIComponent(params.status)}`)).json();
		if (result.error) {
			throw new APIError({
				code: result.error.error_code,
				message: result.error.error_message
			});
		};
	return result;
	}
};
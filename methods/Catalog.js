let fetch = require("node-fetch");
let { ParamError, APIError } = require("../errors/Errors.js");

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
	async setStatus(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgоt the vk_user_id parameter!"
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
	async setDescription(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgоt the vk_user_id parameter!"
			});
		};
		if (!params.description) {
				throw new ParamError({
					code: 2,
					message: "You forgot the description parameter!"
				});
			};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setDescription?token=${this.options.token}&vk_user_id=${params.vk_user_id}&description=${encodeURIComponent(params.description)}`)).json();
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
				message: "You forgot the vk_usеr_id parameter!"
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
	async setCourse(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgоt the vk_user_id parameter!"
			});
		};
		if (!params.in_course) {
				throw new ParamError({
					code: 2,
					message: "You forgot the in_course parameter!"
				});
		};
		if (!params.out_course) {
				throw new ParamError({
					code: 2,
					message: "You forgot the out_course parameter!"
				});
		};
		if (!params.in_max) {
				throw new ParamError({
					code: 2,
					message: "You forgot the in_max parameter!"
				});
		};
		if (!params.in_min) {
				throw new ParamError({
					code: 2,
					message: "You forgot the in_min parameter!"
				});
		};
		if (!params.out_min) {
				throw new ParamError({
					code: 2,
					message: "You forgot the out_min parameter!"
				});
		};
		if (!params.out_max) {
				throw new ParamError({
					code: 2,
					message: "You forgot the out_max parameter!"
				});
		};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setCourse?token=${this.options.token}&vk_user_id=${params.vk_user_id}&in_course=${encodeURIComponent(params.in_course)}&out_course=${encodeURIComponent(params.out_course)}&in_course=${encodeURIComponent(params.in_max)}&out_course=${encodeURIComponent(params.in_min)}&in_course=${encodeURIComponent(params.out_min)}&out_course=${encodeURIComponent(params.out_max)}`)).json();
		if (result.error) {
			throw new APIError({
				code: result.error.error_code,
				message: result.error.error_message
			});
		};
	return result;
	}
};
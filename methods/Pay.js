let fetch = require("node-fetch");
let { ParamError, APIError } = require("../errors/Errors.js");

module.exports = class Pay {
	constructor(options = {}){
		this.options = options;
	}
	async getHistory(params) {
		if (!params.vk_user_id) {
			throw new ParamError({
				code: 1,
				message: "You forgot the vk_user_id parameter!"
			});
		};
		if (!params.count) {
			throw new ParamError({
				code: 2,
				message: "You forgot the count parameter!"
			}); 
		};
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/pay.getHistory?token=${this.options.token}&vk_user_id=${params.vk_user_id}&count=${params.count}`)).json();
		if (result.error) {
			throw new APIError({
				code: result.error.error_code,
				message: result.error.error_message
			});
		};
	return result;
	}
}

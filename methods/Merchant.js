let fetch = require("node-fetch");
let { ParamError, APIError } = require('../errors/Errors.js');

module.exports = class Merchant {
	constructor(options = {}){
		this.options = options;
	}
	async pay(params) {
		let forgot = null;
  
  if (!params.vk_user_id) forgot = 'vk_user_id';
  else if (!params.sum) forgot = 'sum';
  else if (!params.to_id) forgot = 'to_id';

  if (forgot) {
    throw new ParamError({
		code: 1,
		message: `Parameter \`${forgot}\` is required`
	});
  }
  // thanks @nitrojs
		let result = await (await fetch(`http://api.unf0x.ru/kristine-public-api/merchant.pay?token=${this.options.token}&vk_user_id=${params.vk_user_id}&sum=${params.sum}&to_id=${params.to_id}`)).json();
		if (result.error) {
			throw new APIError({
				code: ready.error.error_code,
				message: ready.error.error_message
			});
		};
	return result;
	};
}

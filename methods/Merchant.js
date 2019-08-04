let fetch = require("node-fetch");

module.exports = class Merchant {
	constructor(options = {}){
		this.options = options
	};
	async pay(params) {
		if (!params.vk_user_id) throw new Error("You forgot the vk_user_id parameter!");
		if (!params.sum) throw new Error("You forgot the sum parameter!");
		if (!params.to_id) throw new Error("You forgot the to_id paramerer!");
		let result = (await (await fetch(`http://api.unf0x.ru/kristine-public-api/merchant.pay?token=${this.options.token}&vk_user_id=${params.vk_user_id}&sum=${params.sum}&to_id=${params.to_id}`)).json());
		let ready = await result;
		if (ready.error) throw new Error(`#${ready.error.error_code}. ${ready.error.error_message}`);
	return ready
	}
}

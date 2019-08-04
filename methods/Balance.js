let fetch = require("node-fetch");

module.exports = class Balance {
	constructor(options = {}){
		this.options = options
	};
	async get(params) {
		if (!params.vk_user_id) throw new Error("You forgot the vk_user_id parameter!");
		let result = (await (await fetch(`http://api.unf0x.ru/kristine-public-api/balance.get?token=${this.options.token}&vk_user_id=${params.vk_user_id}`)).json());
		let ready = await result
		if (ready.error) throw new Error(`#${ready.error.error_code}. ${ready.error.error_message}`)
	return ready
	}
}

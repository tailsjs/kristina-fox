let fetch = require("node-fetch");

module.exports = class Catalog {
	constructor(options = {}){
		this.options = options
	};
	async getData(params) {
		if (!params.vk_user_id) throw new Error("You forgot the vk_user_id parameter!");
		let result = (await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.getData?token=${this.options.token}&vk_user_id=${params.vk_user_id}`)).json());
		let ready = await result
		if (ready.error) throw new Error(`#${ready.error.error_code}. ${ready.error.error_message}`)
	return ready
	}
	async setCallbackServer(params) {
			if (!params.vk_user_id) throw new Error("You forgot the vk_user_id parameter!");
			if (!params.url) throw new Error("You forgot the url parameter!")
		let result = (await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setCallbackServer?token=${this.options.token}&vk_user_id=${params.vk_user_id}&url=${encodeURIComponent(params.url)}`)).json());
		let ready = await result;
		if (ready.error) throw new Error(`#${ready.error.error_code}. ${ready.error.error_message}`);
	return ready;
	}
	async setTitle(params) {
		if (!params.vk_user_id) throw new Error("You forgot the vk_user_id parameter!");
		if (!params.title) throw new Error("You forgot the title parameter!")
		let result = (await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setTitle?token=${this.options.token}&vk_user_id=${params.vk_user_id}&title=${encodeURIComponent(params.title)}`)).json());
		let ready = await result;
		if (ready.error) throw new Error(`#${ready.error.error_code}. ${ready.error.error_message}`);
	return ready;
	}
	async setStatus(params) {
		if (!params.vk_user_id) throw new Error("You forgot the vk_user_id parameter!");
		if (!params.status) throw new Error("You forgot the status parameter!");
		let result = (await (await fetch(`http://api.unf0x.ru/kristine-public-api/catalog.setStatus?token=${this.options.token}&vk_user_id=${params.vk_user_id}&status=${encodeURIComponent(params.status)}`)).json());
		let ready = await result;
		if (ready.error) throw new Error(`#${ready.error.error_code}. ${ready.error.error_message}`);
	return ready;
	}
}

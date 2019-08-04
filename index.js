const Balance = require('./methods/Balance');
const Pay = require('./methods/Pay');
const Merchant = require('./methods/Merchant');
module.exports = class API {
    constructor(options = {}) {
        this.balance = new Balance(options);
        this.pay = new Pay(options);
        this.merchant = new Merchant(options);
    }
};
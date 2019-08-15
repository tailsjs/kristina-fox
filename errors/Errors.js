class ParamError extends Error {
  constructor({ code, message }) {
    super(message);

    this.message = message;
    this.code = code;
  }
};
class APIError extends Error {
  constructor({ code, message }) {
    super(message);

    this.message = message;
    this.code = code;
  }
}
module.exports = {
	ParamError,
	APIError
};
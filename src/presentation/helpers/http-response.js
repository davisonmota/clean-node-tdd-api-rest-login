const { UnauthorizeError, ServerError } = require('../errors')

module.exports = class HttpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: {
        error: error.message
      }
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message
      }
    }
  }

  static unauthorizeError () {
    return {
      statusCode: 401,
      body: {
        error: new UnauthorizeError().message
      }
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}

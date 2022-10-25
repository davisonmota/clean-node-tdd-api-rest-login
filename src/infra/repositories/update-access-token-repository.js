const MongoHelper = require('../helpers/mongo-helper')
const MissingParamError = require('../../utils/errors/missing-param-error')

module.exports = class UpdateAccessTokenRepository {
  async update (userId, accessToken) {
    if (!userId) {
      throw new MissingParamError('userId')
    }
    if (!accessToken) {
      throw new MissingParamError('accessToken')
    }
    const userModel = await MongoHelper.getCollection('users')
    await userModel.updateOne({
      _id: userId
    }, {
      $set: {
        accessToken
      }
    })
  }
}

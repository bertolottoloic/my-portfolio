const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Project', {
  title: Joi.string().allow(''),
  description: Joi.string().allow(''),
  imageUrl: Joi.string().allow(''),
  languageId: Joi.number(),
  url: Joi.string().allow('')
})
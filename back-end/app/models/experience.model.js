const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Experience', {
  gapYear:  Joi.string().allow(''),
  title: Joi.string().allow(''),
  description: Joi.string().allow(''),
  imageUrl: Joi.string().allow(''),
  place: Joi.string().allow('')
})
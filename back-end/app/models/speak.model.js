const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Speak', {
    name:  Joi.string().allow(''),
    imageUrl:  Joi.string().allow(''),
    level: Joi.string().allow(''),
    url: Joi.string().allow('')
})
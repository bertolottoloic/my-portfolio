const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Techno', {
    name:  Joi.string().allow(''),
    imageUrl:  Joi.string().allow(''),
    url:  Joi.string().allow('')
})
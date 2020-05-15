const { Router } = require('express')

const { Language } = require('../../models')
const { addImage, deleteAttachedImg } = require('../Manage')
const manageAllErrors = require('../../utils/routes/error-management')


const router = new Router()

router.get('/', (req, res) => {
  try {
    let exps = []
    Language.get().forEach(exp => {
      let expToSend = {...exp}
      expToSend.imageUrl = addImage(expToSend.imageUrl)
      exps.push(expToSend) 
    });
    res.status(200).json(exps)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:languageId', (req, res) => {
  try {
    let exp = {...Language.getById(req.params.languageId)}
    exp.imageUrl = addImage(exp.imageUrl)
    res.status(200).json(exp)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Language.create(req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:languageId', (req, res) => {
  try {
    deleteAttachedImg(Language.getById(req.params.languageId).imageUrl)
    res.status(200).json(Language.delete(req.params.languageId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:languageId', (req, res) => {
  try {
    const prev = Language.getById(req.params.languageId)
    if(old.imageUrl!=req.body.imageUrl) deleteAttachedImg(Language.getById(req.params.languageId).imageUrl)
    res.status(200).json(Language.update(req.params.languageId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

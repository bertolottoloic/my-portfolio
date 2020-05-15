const { Router } = require('express')

const { Speak } = require('../../models')
const { addImage, deleteAttachedImg } = require('../Manage')
const manageAllErrors = require('../../utils/routes/error-management')


const router = new Router()

router.get('/', (req, res) => {
  try {
    let exps = []
    Speak.get().forEach(exp => {
      let expToSend = {...exp}
      expToSend.imageUrl = addImage(expToSend.imageUrl)
      exps.push(expToSend) 
    });
    res.status(200).json(exps)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:speakId', (req, res) => {
  try {
    let exp = {...Speak.getById(req.params.speakId)}
    exp.imageUrl = addImage(exp.imageUrl)
    res.status(200).json(exp)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Speak.create(req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:speakId', (req, res) => {
  try {
    deleteAttachedImg(Speak.getById(req.params.speakId).imageUrl)
    res.status(200).json(Speak.delete(req.params.speakId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:speakId', (req, res) => {
  try {
    const prev = Speak.getById(req.params.speakId)
    if(old.imageUrl!=req.body.imageUrl) deleteAttachedImg(Speak.getById(req.params.speakId).imageUrl)
    res.status(200).json(Speak.update(req.params.speakId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

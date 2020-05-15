const { Router } = require('express')

const { Experience } = require('../../models')
const { addImage, deleteAttachedImg } = require('../Manage')
const manageAllErrors = require('../../utils/routes/error-management')


const router = new Router()

router.get('/', (req, res) => {
  try {
    let exps = []
    Experience.get().forEach(exp => {
      let expToSend = {...exp}
      expToSend.imageUrl = addImage(expToSend.imageUrl)
      exps.push(expToSend) 
    });
    res.status(200).json(exps)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:experienceId', (req, res) => {
  try {
    let exp = {...Experience.getById(req.params.experienceId)}
    exp.imageUrl = addImage(exp.imageUrl)
    res.status(200).json(exp)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Experience.create(req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:experienceId', (req, res) => {
  try {
    deleteAttachedImg(Experience.getById(req.params.experienceId).imageUrl)
    res.status(200).json(Experience.delete(req.params.experienceId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:experienceId', (req, res) => {
  try {
    const prev = Experience.getById(req.params.experienceId)
    if(old.imageUrl!=req.body.imageUrl) deleteAttachedImg(Experience.getById(req.params.experienceId).imageUrl)
    res.status(200).json(Experience.update(req.params.experienceId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

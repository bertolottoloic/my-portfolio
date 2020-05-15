const { Router } = require('express')

const { Techno } = require('../../models')
const { addImage, deleteAttachedImg } = require('../Manage')
const manageAllErrors = require('../../utils/routes/error-management')


const router = new Router()

router.get('/', (req, res) => {
  try {
    let exps = []
    Techno.get().forEach(exp => {
      let expToSend = {...exp}
      expToSend.imageUrl = addImage(expToSend.imageUrl)
      exps.push(expToSend) 
    });
    res.status(200).json(exps)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:technoId', (req, res) => {
  try {
    let exp = {...Techno.getById(req.params.technoId)}
    exp.imageUrl = addImage(exp.imageUrl)
    res.status(200).json(exp)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Techno.create(req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:technoId', (req, res) => {
  try {
    deleteAttachedImg(Techno.getById(req.params.technoId).imageUrl)
    res.status(200).json(Techno.delete(req.params.technoId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:technoId', (req, res) => {
  try {
    const prev = Techno.getById(req.params.technoId)
    if(old.imageUrl!=req.body.imageUrl) deleteAttachedImg(Techno.getById(req.params.technoId).imageUrl)
    res.status(200).json(Techno.update(req.params.technoId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

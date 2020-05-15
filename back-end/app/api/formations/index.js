const { Router } = require('express')

const { Formation } = require('../../models')  
const { addImage, deleteAttachedImg } = require('../Manage')
const manageAllErrors = require('../../utils/routes/error-management')


const router = new Router()

router.get('/', (req, res) => {
  try {
    let forms = []
    Formation.get().forEach( form => {
      let formToSend = {...form}
      formToSend.imageUrl = addImage(formToSend.imageUrl)
      forms.push(formToSend)
    })
    res.status(200).json(forms)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:formationId', (req, res) => {
  try {
    let form = {...Formation.getById(req.params.formationId)}
    console.log(form)
    form.imageUrl = addImage(form.imageUrl)
    console.log(form)
    res.status(200).json(form)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Formation.create(req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:formationId', (req, res) => {
  try {
    deleteAttachedImg(Formation.getById(req.params.formationId).imageUrl)
    res.status(200).json(Formation.delete(req.params.formationId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:formationId', (req, res) => {
  try {
    const prev = Formation.getById(req.params.formationId)
    if(old.imageUrl!=req.body.imageUrl) deleteAttachedImg(Formation.getById(req.params.formationId).imageUrl)
    res.status(200).json(Formation.update(req.params.formationId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

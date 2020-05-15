const { Router } = require('express')

const { Project, Language } = require('../../models')  
const { addImage, deleteAttachedImg } = require('../Manage')
const manageAllErrors = require('../../utils/routes/error-management')


const router = new Router()

router.get('/', (req, res) => {
  try {
    let forms = []
    Project.get().forEach( form => {
      let formToSend = {...form}
      formToSend.imageUrl = addImage(formToSend.imageUrl)
      formToSend.language = {...Language.getById(formToSend.languageId)}
      forms.push(formToSend)
    })
    res.status(200).json(forms)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:projectId', (req, res) => {
  try {
    let form = {...Project.getById(req.params.projectId)}
    form.imageUrl = addImage(form.imageUrl)
    form.language = {...Language.getById(formToSend.languageId)}
    res.status(200).json(form)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Project.create(req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:projectId', (req, res) => {
  try {
    deleteAttachedImg(Project.getById(req.params.projectId).imageUrl)
    res.status(200).json(Project.delete(req.params.projectId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:projectId', (req, res) => {
  try {
    const prev = Project.getById(req.params.projectId)
    if(old.imageUrl!=req.body.imageUrl) deleteAttachedImg(Project.getById(req.params.projectId).imageUrl)
    res.status(200).json(Project.update(req.params.projectId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

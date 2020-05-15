const { Router } = require('express');
const FormationsRouter = require('./formations')
const ExperiencesRouter = require('./experiences')
const ImagesRouter = require('./image')
const LanguagesRouter = require('./languages')
const TechnosRouter = require('./technos')
const SpeaksRouter = require('./speaks')
const ProjectsRouter = require('./projects')

const router = new Router();

router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/formations', FormationsRouter)
router.use('/experiences', ExperiencesRouter)
router.use('/image-uploader', ImagesRouter)
router.use('/languages', LanguagesRouter)
router.use('/technos', TechnosRouter)
router.use('/speaks', SpeaksRouter)
router.use('/projects', ProjectsRouter)

module.exports = router
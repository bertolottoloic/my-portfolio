const { Router } = require('express')
const fs = require('fs') 
const formData = require('express-form-data');
const { addExtension } = require('./Manage')
const multer = require('multer')
const { serverUrl } = require('../../server.config')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `${__dirname}/../../../uploads/`)
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname+Date.now()+addExtension(file))
    }
  });

const upload = multer({storage: storage})

const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

router.post('/', upload.single('photo'), (req, res) => {
    try{
      let date = Date.now();
      while( date == Date.now());
      res.status(200).json(req.file.filename);
    } catch(err) {
        manageAllErrors(err)
    }
})

module.exports = router

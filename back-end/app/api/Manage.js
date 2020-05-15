
const fs = require('fs')

const { serverUrl } = require('../server.config')
const manageAllErrors = require('../utils/routes/error-management')



const deleteAttachedImg = (image) => {
  if(image!=''){
    fs.unlink(__dirname + '../../../uploads/'+image, function(error) {
        if (error) {
            console.warn('Image doesn\'t exist')
        }
        console.log('Deleted '+image+'!!');
    });
  }
}

const addImage = (image) => {
  let imageToSend
  if(image == ""){
    imageToSend = ""
  }
  else {
    imageToSend = serverUrl() + 'uploads/' + image; 
  }
  return imageToSend
}

module.exports = {
  deleteAttachedImg,
  addImage
}

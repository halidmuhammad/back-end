const router = require('express').Router()
const aboutController = require('../controller/about')

router.get('/',aboutController.getAbout)

module.exports = router
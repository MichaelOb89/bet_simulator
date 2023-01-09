const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/standings')

//==========RESTFUL ROUTES==========
router.get('/', dataController.index, apiController.index)

module.exports = router
const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/bets')



//=========INDEX===========
router.get('/', dataController.index, apiController.index)

//=========USER INDEX=======
router.get('/user/:id', dataController.userIndex, apiController.index)
//=========DELETE==========
router.get('/:id', dataController.destroy, apiController.show)
//=========UPDATE==========
router.put('/:id', dataController.update, apiController.show)
//=========CREATE==========
router.post('/', dataController.create, apiController.show)
//==========SHOW===========
router.get('/:id', dataController.show, apiController.show)

module.exports = router
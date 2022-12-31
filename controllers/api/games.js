const games = require('../../data/games')

const dataController = {
    index(req, res, next){
        res.locals.data.games = games
        next()
    }
}

const apiController = {
    index (req, res, next) {
        res.json(res.locals.data.games)
        next()
    }
}

module.exports = { dataController, apiController }
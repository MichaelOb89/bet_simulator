// const game = require('../data/games')

require('dotenv').config()
const db = require('./database')
const Bet = require('../models/bet')

const today = new Date() 

Bet.updateMany({
  date:{$lt: today}
},
{isFinished: true})
.then(()=>db.close())





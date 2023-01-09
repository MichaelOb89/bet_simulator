require('dotenv').config()
const db = require('./database')
const Bet = require('../models/bet')
const pastGames = require('../data/finishedGames').response;


const {Schema, model} = require('mongoose')

const betSchema = new Schema({
    matchId: String,
    ammount: Number,
    odds: Number,
    team: {type: String, required: true},
    isFinished: Boolean
}, {
    timestamps: true
})

const Bet = model('Bet', betSchema)

module.exports = Bet
const {Schema, model} = require('mongoose')

const betSchema = new Schema({
    matchId: String,
    ammount: Number,
    odds: Number,
    team: {type: String, required: true},
    date: Date,
    isFinished: Boolean,
    user: String
}, {
    timestamps: true
})

const Bet = model('Bet', betSchema)

module.exports = Bet
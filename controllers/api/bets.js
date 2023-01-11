const Bet = require('../../models/bet2')

const dataController = {
  //index
  index(req, res, next) {
    Bet.find({}, (err, foundBets) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        });
      } else {
        res.locals.data.bets = foundBets;
        next();
      }
    });
  },
  userIndex(req, res, next) {
    Bet.find({user: req.params.id}, (err, foundBets) => {
      if(err){
        res.status(400).send({
          msg: err.message
        })
      } else{
        res.locals.data.bets = foundBets
        next()
      }
    })
  },
  // Destroy
  destroy(req, res, next) {
    Bet.findByIdAndDelete(req.params.id, (err, deletedBet) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        });
      } else {
        res.locals.data.bet = deletedBet;
        next();
      }
    });
  },
  // Update
  update(req, res, next) {
    Bet.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBet) => {
        if (err) {
          res.status(400).send({
            msg: err.message,
          });
        } else {
          res.locals.data.bet = updatedBet;
          next();
        }
      }
    );
  },
  // Create
  create(req, res, next) {
    Bet.create(req.body, (err, createdBet) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        });
      } else {
        res.locals.data.bet = createdBet;
        next();
      }
    });
  },
  // Edit
  // Show
  show(req, res, next) {
    Bet.findById(req.params.id, (err, foundBet) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: "Could not find a bet with that ID",
        });
      } else {
        res.locals.data.bet = foundBet;
        next();
      }
    });
  }
}

const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.bets)
    },
    show(req, res, next) {
        res.json(res.locals.data.bet)
    },
}

module.exports = { dataController, apiController}

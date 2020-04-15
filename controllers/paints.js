const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteOne
};

function index(req, res) {
  try{
      User.findById(req.user._id, (err, user) => 
        res.status(200).json(user.paints)
      )
  }
  catch(err){
      res.status(500).json(err);
  }
};

function create(req, res) {
  User.findById(req.user._id, (err, user) => {
      if (err) return (err);
      user.paints.push(req.body);
      user.markModified('paints')
      user.save( (err) => {
          if (err) return (err);
          res.status(201).json(user.paints[user.paints.length - 1]);
      });
  });
};

function deleteOne(req, res) {
  User.findById(req.user._id, (err, user) => {
    if (err) return (err);
    let deletedPaint = user.paints.splice(req.params.id, 1);
    user.save( (err, paint) => {
      if (err) return (err);
      res.status(200).json(deletedPaint);
    });
  });
};
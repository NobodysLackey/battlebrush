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
  console.log('CREATE')
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
    user.paints.remove(req.params._id);
    user.save( (err) => {
      if (err) return (err);
      res.status(200).json({message: 'You have successfully deleted this resource...'});
    });
  });
};
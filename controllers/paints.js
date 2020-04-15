const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteOne
};

async function index(req, res) {
  try{
      await User.findById(req.user._id, (err, user) => 
        res.status(200).json(user.paints)
      )
  }
  catch(err){
      res.status(500).json(err);
  }
};

async function create(req, res) {
  console.log(req.user._id)
  await User.findById(req.user._id, (err, user) => {
      if (err) return (err);
      user.paints.push(req.body);
      user.markModified('paints')
      user.save( (err) => {
          if (err) return (err);
          res.status(201).json(user.paints[user.paints.length - 1]);
      });
  });
};

async function deleteOne(req, res) {
  const deletedPaint = await User.findById(req.user.id, (err, user) => {
    if (err) return (err);
    user.paints.findByIdAndRemove(req.params._id);
    res.status(200).json(deletedPaint);
  });
};
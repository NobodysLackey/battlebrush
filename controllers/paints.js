var Paint = require('../models/paint');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const paints = await Paint.find({});
      res.status(200).json(paints);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const paint = await Paint.create(req.body);
    res.status(201).json(paint);
  }
  catch(err){
    res.status(500).json(err);
  }
}

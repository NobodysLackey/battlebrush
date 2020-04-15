const express = require('express');
const router = express.Router();
const paintsCtrl = require('../../controllers/paints');

/*------------------------------ Public Routes ------------------------------*/

router.use(require('../../config/auth'));
router.get('/', checkAuth, paintsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.post('/', checkAuth, paintsCtrl.create);
router.delete('/:id', checkAuth,  paintsCtrl.delete);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;

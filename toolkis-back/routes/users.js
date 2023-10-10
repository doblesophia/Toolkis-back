import express  from 'express';
import createUser from '../controllers/user/createUser.js';
import userValidator from '../validators/newRegisterValidator.js';
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js';
import signinController from '../controllers/user/signin.js'
import signout from '../controllers/user/signout.js';
import generateToken from '../middlewares/generateToken.js';
import accountNotExist from '../middlewares/accountNotExist.js';
import passwordOk from '../middlewares/passwordOk.js';
import signinToken from '../controllers/user/signinToken.js'
import findEmail from '../middlewares/findEmail.js';
import hasheadorPassword from '../middlewares/hasheadorPassword.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', findEmail,validator(userValidator), hasheadorPassword ,createUser)
router.post('/signin',   accountNotExist , passwordOk, generateToken, validator(userValidator), signinController)
router.post('/signinToken', passport.authenticate("jwt",{ session: false }), signinToken)
router.post('/signout', passport.authenticate('jwt', {session:false} ), signout)

export default router;

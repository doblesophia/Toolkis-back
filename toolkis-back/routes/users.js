import express  from 'express';
import createUser from '../controllers/user/createUser.js';
import userValidator from '../validators/newRegisterValidator.js';
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js';
import signinController from '../controllers/user/signin.js'
import signout from '../controllers/user/signout.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', validator(userValidator),createUser)
router.post('/signin', passport.authenticate("jwt",{ session: false }), 
validator(userValidator),
signinController)
router.post('/signout', passport.authenticate('jwt', {session:false} ), signout)

export default router;

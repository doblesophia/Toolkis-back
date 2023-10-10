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
import updateUser from '../controllers/user/updateUser.js'; 
import updateUserValidator from "../validators/updateUserValidator.js"
import deleteUser from '../controllers/user/deleteUser.js';
import readUser from '../controllers/user/readUser.js';

const router = express.Router();

router.get("/", readUser)
router.post('/register', findEmail,validator(userValidator), hasheadorPassword ,createUser)
router.post('/signin',   accountNotExist , passwordOk, generateToken, validator(userValidator), signinController)
router.post('/signinToken', passport.authenticate("jwt",{ session: false }), signinToken)
router.post('/signout', passport.authenticate('jwt', {session:false} ), signout)
router.put("/:id", validator(updateUserValidator), updateUser)
router.delete("/:id", deleteUser)

export default router;

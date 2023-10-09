import express from 'express';
import productsRouter from "../routes/products.js"
import userRouter from "../routes/users.js"
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/products", productsRouter)
router.use('/auth', userRouter)


export default router;

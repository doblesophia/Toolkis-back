import express from 'express';
import productsRouter from "../routes/products.js"
import userRouter from "../routes/users.js"
import categoryRouter from "./categories.js"
import subcategoriesRouter from "./subcategories.js"
import payments from "./payments.js"

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/products", productsRouter)
router.use('/auth', userRouter)
router.use("/categories", categoryRouter)
router.use("/subcategory", subcategoriesRouter)
router.use("/payment",payments)


export default router;

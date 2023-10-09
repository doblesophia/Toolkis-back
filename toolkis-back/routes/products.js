import express  from "express";
import createProduct from "../controllers/products/createProduct.js"
import readAllProducts from "../controllers/products/readAllProducts.js"
import updateProduct from "../controllers/products/updateProduct.js";
import validateProduct from "../validators/productsValidator.js";
import validator from "../middlewares/validator.js";
import newProductValidator from "../validators/newProductValidator.js";
import deleteProduct from "../controllers/products/deleteProduct.js";



const router = express.Router();

router.post("/", validator(newProductValidator),createProduct),
router.get("/", readAllProducts),
router.put("/:id", validator(validateProduct), updateProduct),
router.delete("/:id",deleteProduct )


export default router
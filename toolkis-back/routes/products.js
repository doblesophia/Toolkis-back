import express  from "express";
import createProduct from "../controllers/createProduct.js"
import readAllProducts from "../controllers/readAllProducts.js"
import updateProduct from "../controllers/updateProduct.js";
import validateProduct from "../validators/productsValidator.js";
import validator from "../middlewares/validator.js";
import newProductValidator from "../validators/newProductValidator.js";
import deleteProduct from "../controllers/deleteProduct.js";



const router = express.Router();

router.post("/", validator(newProductValidator),createProduct),
router.get("/", readAllProducts),
router.put("/:id", validator(validateProduct), updateProduct),
router.delete("/:id",deleteProduct )


export default router
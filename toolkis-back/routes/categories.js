import express  from "express";
import createCategory from "../controllers/categories/createCategory.js"
import updateCategory from "../controllers/categories/updateCategory.js";
import deleteCategory from "../controllers/categories/deleteCategory.js";
import readCategories from "../controllers/categories/readCategories.js";

const router = express.Router();

router.get("/", readCategories)
router.post("/", createCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)


export default router
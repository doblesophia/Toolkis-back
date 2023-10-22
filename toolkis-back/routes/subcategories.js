import  express  from "express";
import readSubCategories from "../controllers/sub-categories/readSubCategories.js";
import createSubCategory from "../controllers/sub-categories/createSubCategory.js";
import deleteSubCategory from "../controllers/sub-categories/deleteSubCategory.js";
import updateSubCategory from "../controllers/sub-categories/updateSubCategory.js";

const router = express.Router()

router.get("/", readSubCategories)
router.post("/", createSubCategory)
router.delete("/:id", deleteSubCategory)
router.put("/:id", updateSubCategory)


export default router
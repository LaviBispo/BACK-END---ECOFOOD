const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  listItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/shoppingList.controller");

const router = Router();

router.use(authMiddleware);

router.get("/", listItems);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;

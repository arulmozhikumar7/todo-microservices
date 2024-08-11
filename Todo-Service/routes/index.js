const router = require("express").Router();
const todoController = require("../controller/todoController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/",authMiddleware, todoController.createTodo);
router.get("/",authMiddleware, todoController.getTodos);
router.put("/:id",authMiddleware, todoController.updateTodo);
router.delete("/:id",authMiddleware, todoController.deleteTodo);

module.exports = router
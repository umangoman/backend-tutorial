const express = require("express");
const router = express.Router();
const c = require("../controllers/userController");

router.post("/register", c.registerUser);
router.post("/login", c.loginUser);
router.get("/", c.getUsers);
router.get("/:id", c.getUserById);
router.put("/:id", c.updateUser);
router.delete("/:id", c.deleteUser);

module.exports = router;
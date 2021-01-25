const express = require("express");

const userController = require("./../controllers/user-ctrl");

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("user/:id", userController.getUserById);
router.delete("user/:id", userController.deleteUser);
router.post("user/", userController.createUser);
router.put("user/:id", userController.updateUser);

module.exports = router;

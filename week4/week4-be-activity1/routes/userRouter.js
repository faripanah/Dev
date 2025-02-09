const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// GET /users - Retrieve all users
router.get("/", getAllUsers);

// POST /users - Create a new user
router.post("/", createUser);

// GET /users/:userId - Get a single user by ID
router.get("/:userId", getUserById);

// PUT /users/:userId - Update a user by ID
router.put("/:userId", updateUser);

// DELETE /users/:userId - Delete a user by ID
router.delete("/:userId", deleteUser);

module.exports = router;

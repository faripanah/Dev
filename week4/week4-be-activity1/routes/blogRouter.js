const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
} = require("../controllers/blogController");

// GET /blogs - Retrieve all blogs
router.get("/", getAllBlogs);

// POST /blogs - Create a new blog
router.post("/", createBlog);

// GET /blogs/:blogId - Get a single blog by ID
router.get("/:blogId", getBlogById);

// DELETE /blogs/:blogId - Delete a blog by ID
router.delete("/:blogId", deleteBlog);

module.exports = router;

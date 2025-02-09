const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// GET /blogs - Retrieve all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blogs" });
  }
};

// POST /blogs - Create a new blog
const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({ ...req.body });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog", error: error.message });
  }
};

// GET /blogs/:blogId - Get a single blog by ID
const getBlogById = async (req, res) => {
  const { blogId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(blogId);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog" });
  }
};

// PUT /blogs/:blogId - Update a blog by ID
const updateBlog = async (req, res) => {
  const { blogId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, { ...req.body }, { new: true });
    if (updatedBlog) {
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog" });
  }
};

// DELETE /blogs/:blogId - Delete a blog by ID
const deleteBlog = async (req, res) => {
  const { blogId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (deletedBlog) {
      res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};

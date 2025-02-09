const Blog = require("../models/blogModel");

// GET /blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error });
  }
};

// POST /blogs
const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({ ...req.body });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "Error creating blog", error });
  }
};

// GET /blogs/:blogId
const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blog", error });
  }
};

// DELETE /blogs/:blogId
const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (deletedBlog) {
      res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
};

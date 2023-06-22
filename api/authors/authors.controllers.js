const Post = require("../../models/Post");
const Author = require("../../models/Author");
exports.fetchAuthor = async (id) => {};

exports.postsCreate = async (req, res, next) => {
  try {
    const post = req.body;
    const { authorId } = req.params;
    const foundAuthor = await Author.findById(authorId);
    if (!foundAuthor) return res.status(404).json({ msg: "author not found" });
    const newPost = await Post.create(post);
    const addPostToAuthor = await Author.findByIdAndUpdate(authorId, {
      $push: { posts: newPost._id },
    });
    res.status(201).json(addPostToAuthor);
  } catch (error) {
    next(error);
  }
};

exports.authorCreate = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

exports.authorAll = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("posts");
    res.status(201).json(authors);
  } catch (error) {
    next(error);
  }
};

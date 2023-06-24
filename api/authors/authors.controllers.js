const Post = require("../../models/Post");
const Author = require("../../models/Author");

exports.fetchAuthor = async (authorId) => {
  const foundAuthor = await Author.findById(authorId);
  console.log("here", foundAuthor);
  return foundAuthor;
};

exports.postsCreate = async (req, res, next) => {
  try {
    //creating a post and adding the author id to it
    //each post has one author but an author can have many posts
    const post = req.body;
    //one
    const newPostAndAddAuthToPost = await Post.create({
      ...post,
      authors: req.author,
    });
    //many
    const addPostToAuthor = await Author.findByIdAndUpdate(req.author, {
      $push: { posts: newPostAndAddAuthToPost._id },
    });
    return res.status(201).json(newPostAndAddAuthToPost);
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

exports.authors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("posts");
    res.status(201).json(authors);
  } catch (error) {
    next(error);
  }
};
exports.authorDelete = async (req, res, next) => {
  try {
    console.log("first");
    // console.log("hereeee", req.author);
    await Author.findByIdAndDelete(req.author);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const express = require("express");
const router = express.Router();
const {
  postsCreate,
  authorCreate,
  authors,
  fetchAuthor,
  authorDelete,
} = require("./authors.controllers");

router.param("authorId", async (req, res, next, authorId) => {
  try {
    const foundAuthor = await fetchAuthor(authorId);
    if (!foundAuthor) {
      // let error = new Error("Author not found");
      // error.status = 404;
      return next({ status: 404, message: "Author not found" });
    }

    req.author = foundAuthor;
    console.log(req.author);
    next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", authors);
router.post("/", authorCreate);

router.post("/:authorId", postsCreate);

// router.delete("/:postId", );
router.delete("/:authorId", authorDelete);
// router.put("/:postId", );
// router.post("/:postId/:tagId", );
module.exports = router;

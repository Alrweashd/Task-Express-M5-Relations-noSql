const express = require("express");
const router = express.Router();
const {
  postsCreate,
  authorCreate,
  authorAll,
} = require("./authors.controllers");

// router.param("authorId", async (req, res, next, authorId) => {
//   try {
//     const foundAuthor = await fetchPost(authorId);
//     if (!foundAuthor) return next({ status: 404, msg: "Author not found" });

//     req.author = foundAuthor;
//     next;
//   } catch (error) {
//     return next(error);
//   }
// });

router.get("/", authorAll);
router.post("/", authorCreate);

router.post("/:authorId", postsCreate);

// router.delete("/:postId", );

// router.put("/:postId", );
// router.post("/:postId/:tagId", );
module.exports = router;

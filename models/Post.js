const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  authors: { type: Schema.Types.ObjectId, ref: "Authors" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = model("Post", PostSchema);

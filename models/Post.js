const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  //authors
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = model("Post", PostSchema);

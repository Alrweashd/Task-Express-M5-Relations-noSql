const express = require("express");
const app = express();
app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));

const postsRoutes = require("./api/posts/posts.routes");
const authorsRoutes = require("./api/authors/authors.routes");
const connectDb = require("./database");
const notFoundPath = require("./middlewares/notFoundPath");
const errorHandler = require("./middlewares/errorHandler");
connectDb();

app.use("/posts", postsRoutes);

app.use("/authors", authorsRoutes);
app.use(notFoundPath);
app.use(errorHandler);
// app.use((req, res, next) => {
//   res.status(404).json({ message: "Path not found" });
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     message: err.message || "Internal Server Error",
//   });
// });

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

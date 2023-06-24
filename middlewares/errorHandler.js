const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
};
module.exports = errorHandler;

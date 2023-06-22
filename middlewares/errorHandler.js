const errorHandler = (err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ msg: err.message || "Internal Server Error" });
};
module.exports = errorHandler;

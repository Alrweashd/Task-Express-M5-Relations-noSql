const notFoundPath = (req, res, next) => {
  //accessing the errorHandler function
  return next({ status: 404, message: "wrong path" });
};
module.exports = notFoundPath;

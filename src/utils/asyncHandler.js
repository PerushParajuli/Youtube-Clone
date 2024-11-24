// Takes another function as an argument (requestHandler) and returns a new function.
const asyncHandler = (requestHandler) => {
  // inner function
  (req, res, next) => {
    // The requestHandler function is wrapped in a Promise.resolve(). This ensures that the requestHandler is always executed within a Promise context, even if it's not explicitly asynchronous.
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;

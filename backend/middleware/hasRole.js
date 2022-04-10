import { error } from "./error/customError";

export default (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(error(`Role: ${req.user.role} is not allowed to access this resouce `, 403));
    }
    next();
  };
};

export function customError(message = "", statusCode) {
  let errorOBJ = new Error(message);
  errorOBJ["statusCode"] = statusCode;
  return errorOBJ;
}

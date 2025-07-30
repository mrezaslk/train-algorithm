function getContentType(extention) {
  const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    default: "text/plain",
  };
  return contentType[extention] ?? contentType.default;
}
getContentType(".html"); //? 'text/html'

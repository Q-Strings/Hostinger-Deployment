const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "out");
const port = Number.parseInt(process.env.PORT || "3000", 10);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".map": "application/json; charset=utf-8"
};

function sendFile(filePath, res, statusCode) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);

  if (statusCode === 404) {
    res.setHeader("Cache-Control", "no-store");
  }

  const stream = fs.createReadStream(filePath);
  stream.on("error", () => {
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
  stream.pipe(res);
}

function resolvePath(urlPath) {
  let decoded = "/";
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  if (decoded.includes("\0")) {
    return null;
  }

  const normalized = path.normalize(decoded);
  const fsPath = path.join(root, normalized);

  if (!fsPath.startsWith(root)) {
    return null;
  }

  return fsPath;
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.statusCode = 405;
    res.end("Method Not Allowed");
    return;
  }

  const url = new URL(req.url || "/", "http://localhost");
  let fsPath = resolvePath(url.pathname);

  if (!fsPath) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  try {
    if (fs.existsSync(fsPath) && fs.statSync(fsPath).isDirectory()) {
      fsPath = path.join(fsPath, "index.html");
    } else if (!fs.existsSync(fsPath) && !path.extname(fsPath)) {
      const withIndex = path.join(fsPath, "index.html");
      if (fs.existsSync(withIndex)) {
        fsPath = withIndex;
      }
    }

    if (!fs.existsSync(fsPath)) {
      const notFoundPath = path.join(root, "404.html");
      if (fs.existsSync(notFoundPath)) {
        sendFile(notFoundPath, res, 404);
        return;
      }
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }

    if (req.method === "HEAD") {
      res.statusCode = 200;
      res.end();
      return;
    }

    sendFile(fsPath, res, 200);
  } catch {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});

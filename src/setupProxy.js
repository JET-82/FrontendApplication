const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://34.47.68.134:8080",
      changeOrigin: true,
    })
  );
};
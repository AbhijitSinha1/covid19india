module.exports = {
  script: "serve",
  name: "covid19",
  env: {
    PM2_SERVE_PATH: '.',
    PM2_SERVE_PORT: 5000,
    PM2_SERVE_SPA: 'true',
    PM2_SERVE_HOMEPAGE: './index.html'
  }
}

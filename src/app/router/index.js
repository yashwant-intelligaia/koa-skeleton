var Router = require("koa-router");
var router = new Router();

module.exports = (app) => {
  router.get("/", (ctx, next) => {
    ctx.body = "hello world!";
  });
  require("./user")(app, Router);
  app.use(router.routes()).use(router.allowedMethods());
};

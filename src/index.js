const koa = require("koa");
require("dotenv").config();
const app = new koa();
const port = process.env.PORT || 8080;
require("./app/config/mongo");
require("./app/router")(app);
console.log("port", port);
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

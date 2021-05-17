const model = require("../model/User");
exports.getUser = async (ctx, next) => {
  var response = model.getUser();
  ctx.body = response;
};

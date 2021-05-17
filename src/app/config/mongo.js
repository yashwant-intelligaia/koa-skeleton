const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("mongo connection successful");
  }
);

// expressアプリののエントリーポイント
// routesを読み込んだりする・

const express = require("express");
const app = express();
const WeightRouter = require("./routes/WeightRoute");
// JSON ボディを扱えるようにする
app.use(express.json());

// URL-encoded も必要なら
app.use(express.urlencoded({ extended: true }));



app.use("/weights",WeightRouter);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

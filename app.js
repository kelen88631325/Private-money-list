const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
// const mongoose = require("mongoose");

//資料庫常數(這邊名稱暫時使用其他專案的)
//const restaurantListMongoose = require("./models/todo");

// 引用 body-parser
const bodyParser = require("body-parser");

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }));

// 設定模板引擎，宣告預設請用名為 main.handlebars 這支檔案當作佈局
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 設定靜態檔案 setting static files
app.use(express.static("public"));

//以下資料庫連接
// mongoose.connect("mongodb://localhost/todoList", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", () => {
//   console.log("mongodb error");
// });

// db.once("open", () => {
//   console.log("mongodb 連接成功");
// });

// 開始並監聽伺服器，用來確認有沒有正確啟動，start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});

//以下路由設定
//顯示view的main
// app.get("/", (req, res) => {
//   // res.render("index", { restaurant: restaurant });
//   res.send("This is my movie list built with Express");
// });

app.get("/", (req, res) => {
  res.render("index");
  // res.send("This is my movie list built with Express");
});

//////////////////////////////////////////////

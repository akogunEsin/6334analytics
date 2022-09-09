// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").parse();
// }

const express = require("express");
const mysql = require("mysql");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);

// Connect to MySQL
// mysql.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
// });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "6334analytics",
});

// Connect to the Database
db.connect((err) => {
  if (err) {
    throw err;
  } else console.log("MySQL Connected");
});

//Set Port
app.listen(process.env.PORT || 3000);

const express = require("express");
const mysql = require("mysql")
const myConnection = require("express-myconnection")
const user = require("./routes/user-router");
const area = require("./routes/area-router");
const app = express();

const apiPort = 3000;
const route = "http://localhost";

app.set("port", process.env.PORT || apiPort);

app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
      database: "ludycom",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(user);
app.use(area);

app.listen(app.get("port"), () =>
  console.log(`Server running: ${route}:${app.get("port")}`)
);

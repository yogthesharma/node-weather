// initializing npm modules
const path = require(`path`);
const express = require(`express`);
const hbs = require(`hbs`);
// importing other js files
const weather = require("./weather");

// getting express function
const app = express();

// defining locations

const location = path.join(__dirname, "../public");

// firstly static pages loading
// this statement is also responsible for accessing the css to the document it renders the css from the directory it is pointing towards
app.use(express.static(location));

// now making synamic pages
app.set("view engine", "hbs");

// setting up location for views
app.set("views", path.join(__dirname, "../templates/views"));

// registering partials
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

// commands after getting requests
app.get("", (req, res) => {
  res.render("index", {
    name: "Yog Sharma",
    title: "Weather",
    para: "This is an GUI for the Weather API",
  });
});

app.get("/help", (req, res) => {
  res.render("help", { name: "Yog Sharma" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "Yog Sharma" });
});

app.get("/weather", (req, res) => {
  if (!req.query.weather) {
    return res.send({
      error: `All right! Provide the location first`,
    });
  }
  weather.weather(req.query.weather, (err, data) => {
    if (err) {
      return res.send({
        error: "You've entered wrong data.",
      });
    }
    res.send({ data });
  });
  // res.send(`Here You Go  , location is ${req.query.weather}`);
});

// app.get("/products", (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: "Cannot serve to the request without search option",
//     });
//   }
//   console.log(req.query);
//   res.send({
//     products: "",
//   });
// });

// listining the server at spcified port
app.listen(3001, () => {
  console.log("Server Started");
});

// query in url starts from '?'
// key value pairs are seprated by '&'
// information about query request lives on request
// we cannot serve an http request twice

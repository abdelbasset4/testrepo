const express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('assets'));
app.get("/", (req, res, next) => {
  let skills = ["HTML","CSS","JS"]
  res.render("index", {
    skills:skills
  });
})
app.get("/about", (req, res, next) => {
  
  res.render("about", {
    about:"About Me"
  });
})
app.get("/about-me", (req, res, next) => {
  
  res.redirect("/about");
})
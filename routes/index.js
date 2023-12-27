var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Hassane",
    added: new Date(),
  },
  {
    text: "Hey!!",
    user: "Aymen",
    added: new Date(),
  },
  {
    text: "How are you cutie?",
    user: "Hassane",
    added: new Date(),
  },
  {
    text: "I'm fine ahbb",
    user: "Aymen",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", comments: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  console.log(req.body);
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;

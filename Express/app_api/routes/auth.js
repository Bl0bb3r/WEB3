//code for JWT inspired by following video: https://www.youtube.com/watch?v=2jqok-WgelI
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../models/Validation");

//Validation

router.post("/register", async (req, res) => {
  //Data validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email is in db
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  //Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPW = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPW
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user.id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  //Data validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email is in db
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist");
  //check password
  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!passwordIsValid) return res.status(400).send("Wrong password");

  //JWT token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).send({ token });
  //res.header("auth-token", token).send(token);
});

//We want to verify the token in the backend after login
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("No token present");
  }
  let payload = jwt.verify(token, process.env.TOKEN_SECRET);
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.user._id = payload.subject;
  next();
}

router.get("/members", verifyToken, (req, res) => {
  res(user._id);
});

module.exports = router;

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { createJWT } = require("../utils/auth");
const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;

exports.signup = (req, res, next) => {
  let { name,role, email, password, password_confirmation } = req.body;
  let errors = [];
  if (!name) {
    errors.push({ name: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!passwordRegexp.test(password)) {
    errors.push({ password: "invalid" });
  }
  if (!password_confirmation) {
    errors.push({
      password_confirmation: "required",
    });
  }
  if (password !== password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return (
          res
            .status(422)
            .json({ errors: [{ user: "email already exists" }] })
        );
      } else {
        const user = new User({
          name,
          email,
          password,
          role
        });

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  errors: [{ error: err }],
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

exports.signin = (req, res) => {
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors });
  }
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: "not found" }],
        });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res
                .status(400)
                .json({ errors: [{ password: "incorrect" }] });
            }

            


            jwt.sign(
              {
                _id: user._id,
                email: user.email,
                iat: Math.floor(Date.now() / 1000) - 30,
              },
              process.env.TOKEN_SECRET,
              { expiresIn: "10h" },
              (err, token) => {
                if (token) {
                  jwt.verify(
                    token,
                    process.env.TOKEN_SECRET,
                    (err, decoded) => {
                      if (err) {
                        res.status(500).json({ erros: err });
                      }
                      if (decoded) {
                        return res.status(200).json({
                          success: true,
                          token: token,
                          message: user,
                        });
                      }
                    }
                  );
                }
              }
            );
          })
          .catch((err) => {
            res.status(500).json({ erros: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ erros: err });
    });
};

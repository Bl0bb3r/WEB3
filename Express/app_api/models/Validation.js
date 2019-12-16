const Joi = require("@hapi/joi");

//Register validation
const registerValidation = val => {
  const schema = Joi.object({
    name: Joi.string()
      .min(4)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(val);
};

//login validation
const loginValidation = val => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(val);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

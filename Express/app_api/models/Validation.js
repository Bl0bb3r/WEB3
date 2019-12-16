const Joi = require("@hapi/joi");

//Register validation
const registerValidation = val => {
  const schema = Joi.object({
    Firstname: Joi.string()
      .min(4)
      .required(),
    Lastname: Joi.string()
      .min(4)
      .required(),
    Nickname: Joi.string()
      .min(4)
      .required(),
    Email: Joi.string()
      .min(6)
      .required()
      .email(),
    Password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(val);
};

//login validation
const loginValidation = val => {
  const schema = Joi.object({
    Email: Joi.string()
      .min(6)
      .required()
      .email(),
    Password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(val);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

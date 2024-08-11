const joi = require("joi");

const todoSchema = joi.object({
    title:joi.string().required(),
    description:joi.string().required()
});

module.exports = {todoSchema}
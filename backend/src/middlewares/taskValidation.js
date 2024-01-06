const { body } = require('express-validator');

const taskCreateValidation = () => {
  return [
    body('name')
      .isString()
      .withMessage('O nome da Task é obrigatório')
      .isLength({ min: 5 })
      .withMessage('A Task precisa ter no mínimo 5 caracteres'),
  ];
};

module.exports = {
  taskCreateValidation,
};

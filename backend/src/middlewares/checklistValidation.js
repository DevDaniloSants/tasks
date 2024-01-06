const { body } = require('express-validator');

const checklistCreateValidation = () => {
  return [
    body('name')
      .isString()
      .withMessage('O nome da checklist é obrigatório')
      .isLength({ min: 5 })
      .withMessage('A Checklist precisa ter no mínimo 5 caracteres'),
  ];
};

module.exports = {
  checklistCreateValidation,
};

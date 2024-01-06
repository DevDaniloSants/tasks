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

const checklistUpdateValidation = () => {
  return [
    body('name')
      .optional()
      .isString()
      .withMessage('O título é obrigatório')
      .isLength({ min: 5 })
      .withMessage('A Checklist precisa ter no mínimo 5 caracteres'),
  ];
};

module.exports = {
  checklistCreateValidation,
  checklistUpdateValidation,
};

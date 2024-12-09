import { ValidationMessages } from './registration.types';

export const VALIDATION_MESSAGES: ValidationMessages = {
  name: {
    required: 'Nome é obrigatório'
  },
  email: {
    required: 'Email é obrigatório',
    email: 'Email inválido'
  },
  phone: {
    required: 'Telefone é obrigatório'
  }
};
export interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
}

export interface ValidationMessages {
  [key: string]: {
    [key: string]: string;
  };
}
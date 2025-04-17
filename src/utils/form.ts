
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export type FormFields = {
  name: string;
  email: string;
  message?: string;
  acknowledgment?: boolean;
};

export type FormErrors = Partial<{
  name: string;
  email: string;
  message: string;
  acknowledgment: string;
  general: string;
}>;

export const validateForm = (fields: FormFields): FormErrors => {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(fields.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (fields.message !== undefined && !fields.message.trim()) {
    errors.message = "Message is required";
  }

  if (fields.acknowledgment !== undefined && !fields.acknowledgment) {
    errors.acknowledgment = "You must acknowledge the Code of Conduct";
  }

  return errors;
};

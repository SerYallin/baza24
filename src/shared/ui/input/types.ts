export type TInputProps = {
  value: string;
  setValue: (e: string) => void;
  label?: string;
  placeholder?: string;
  notice?: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
};

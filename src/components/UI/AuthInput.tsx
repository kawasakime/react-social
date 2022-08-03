import * as React from "react";

interface IAuthInputProps {
  type: string;
  placeholder: string;
  value: string;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FunctionComponent<IAuthInputProps> = ({
  type,
  placeholder,
  value,
  handleChangeEmail,
}) => {
  return (
    <input
      value={value}
      onChange={handleChangeEmail}
      type={type}
      className="auth-input"
      placeholder={placeholder}
      required
    />
  );
};

export default AuthInput;

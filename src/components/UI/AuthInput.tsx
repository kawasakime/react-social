import * as React from "react";

interface IAuthInputProps {
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const AuthInput: React.FunctionComponent<IAuthInputProps> = ({
  type,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      className="auth-input"
      placeholder={placeholder}
      required
    />
  );
};

export default AuthInput;

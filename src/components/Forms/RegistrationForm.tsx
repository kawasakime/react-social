import * as React from "react";

import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import AuthInput from "../UI/AuthInput";

interface IRegistrationFormProps {
  handleRegisterUser: (
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    passowrd: string
  ) => void;
}

const RegistrationForm: React.FC<IRegistrationFormProps> = ({
  handleRegisterUser,
}) => {
  const [visibility, setVisibility] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassowrd] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  function handleVisibility() {
    setVisibility((prev) => !prev);
  }

  return (
    <form action="" className="registration__form">
      <div className="form-field">
        <AiOutlineUser className="auth-icon" />
        <AuthInput
          type={"text"}
          placeholder={"Никнейм"}
          value={name}
          setValue={setName}
        />
      </div>
      <div className="form-field">
        <AiOutlineLock className="auth-icon" />
        <AuthInput
          type={!visibility ? "password" : "text"}
          placeholder={"Пароль"}
          value={password}
          setValue={setPassowrd}
        />
        <div className="auth-icon visibility" onClick={handleVisibility}>
          {visibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
      </div>
      <div className="form-field">
        <AiOutlineMail className="auth-icon" />
        <AuthInput
          type={"email"}
          placeholder={"Email"}
          value={email}
          setValue={setEmail}
        />
      </div>
      <button
        className="auth-btn login-btn"
        onClick={(e) => handleRegisterUser(e, email, password)}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;

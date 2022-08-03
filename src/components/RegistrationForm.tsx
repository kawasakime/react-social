import * as React from "react";

import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import AuthInput from "./UI/AuthInput";

interface IRegistrationFormProps {
  handleRegisterUser: (e: React.MouseEvent<HTMLButtonElement>,email: string, passowrd: string) => void
}

const RegistrationForm: React.FunctionComponent<IRegistrationFormProps> = (
  {handleRegisterUser}
) => {
  const [visibility, setVisibility] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassowrd] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  function handleVisibility() {
    setVisibility((prev) => !prev);
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassowrd(e.target.value)
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  return (
    <form action="" className="registration__form">
      <div className="form-field">
        <AiOutlineUser className="auth-icon" />
        <AuthInput
          type={"text"}
          placeholder={"Никнейм"}
          value={name}
          handleChangeEmail={handleChangeName}
        />
      </div>
      <div className="form-field">
        <AiOutlineLock className="auth-icon" />
        <AuthInput
          type={!visibility ? "password" : "text"}
          placeholder={"Пароль"}
          value={password}
          handleChangeEmail={handleChangePassword}
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
          handleChangeEmail={handleChangeEmail}
        />
      </div>
      <button className="auth-btn login-btn" onClick={(e) => handleRegisterUser(e, email, password)}>Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;

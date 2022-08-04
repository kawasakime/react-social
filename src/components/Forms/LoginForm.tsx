import * as React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthInput from "../UI/AuthInput";

interface ILoginFormProps {
  handleLogin: (e: React.MouseEvent<HTMLButtonElement>, email: string, password: string) => void;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = ({handleLogin}) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassowrd] = React.useState<string>("");

  return (
    <form className="login__form" action="">
      <div className="form-field">
        <AiOutlineUser className="auth-icon" />
        <AuthInput
          type={"email"}
          placeholder={"Почта"}
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className="form-field">
        <AiOutlineLock className="auth-icon" />
        <AuthInput
          type={"password"}
          placeholder={"Пароль"}
          value={password}
          setValue={setPassowrd}
        />
      </div>
      <button className="auth-btn login-btn" onClick={(e) => {handleLogin(e, email, password)}}>Войти</button>
      <Link to="/registration" className="auth-btn registration-btn">
        Регистрация
      </Link>
    </form>
  );
};

export default LoginForm;

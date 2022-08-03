import * as React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth"

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {

  const [login, setLogin] = React.useState<string>('')
  const [password, setPassowrd] = React.useState<string>('')

  const auth = getAuth(app);

  return (
    <form className="login__form" action="">
      <div className="form-field">
        <AiOutlineUser className="auth-icon" />
        <input
          className="auth-input"
          type="text"
          placeholder="Логин"
          required
        />
      </div>
      <div className="form-field">
        <AiOutlineLock className="auth-icon" />
        <input
          className="auth-input"
          type="password"
          placeholder="Пароль"
          required
        />
      </div>
      <button className="auth-btn login-btn">Войти</button>
      <Link to="/registration" className="auth-btn registration-btn">
        Регистрация
      </Link>
    </form>
  );
};

export default LoginForm;

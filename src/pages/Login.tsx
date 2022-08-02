import * as React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { BsChatLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div className="login">
      <h1>
        React Social{" "}
        <p>
          Is Typing...
          <BsChatLeftFill />{" "}
        </p>
        <span>
          Мини соц. сеть, выполненная на <span>React</span>, <span>RTK</span>,{" "}
          <span>TypeScript</span>, <span>SCSS</span> <br /> с авторизацией через{" "}
          <span>Firebase</span>.{" "}
        </span>
      </h1>
      <div className="login__container">
        <div className="login__top-decor"></div>
        <h1>Авторизация</h1>
        <form className="login__form" action="">
          <div className="form-field">
            <AiOutlineUser className="auth-icon" />
            <input className="auth-input" type="text" placeholder="Логин" required/>
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
      </div>
    </div>
  );
};

export default Login;

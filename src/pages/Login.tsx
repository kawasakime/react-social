import * as React from "react";
import { BsChatLeftFill } from "react-icons/bs";
import LoginForm from "../components/Forms/LoginForm";

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
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;

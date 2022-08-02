import * as React from "react";
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";

interface IRegistrationProps {}

const Registration: React.FunctionComponent<IRegistrationProps> = (props) => {
  const [visibility, setVisibility] = React.useState<boolean>(false);

  function handleVisibility() {
    setVisibility((prev) => !prev);
  }

  return (
    <div className="registration">
      <div className="registration__container">
        <Link to="/login" className="back">
          <TbArrowBackUp/>
          <span>Назад</span>
        </Link>
        <h1>Регистрация</h1>
        <form action="" className="registration__form">
          <div className="form-field">
            <AiOutlineUser className="auth-icon" />
            <input
              type="text"
              className="auth-input"
              placeholder="Имя"
              required
            />
          </div>
          <div className="form-field">
            <AiOutlineLock className="auth-icon" />
            <input
              type={!visibility ? "password" : "text"}
              className="auth-input"
              placeholder="Пароль"
              required
            />
            <div className="auth-icon visibility" onClick={handleVisibility}>
              {visibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <div className="form-field">
            <AiOutlineMail className="auth-icon" />
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              required
            />
          </div>
        </form>
        <button className="auth-btn login-btn">Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;

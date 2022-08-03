import * as React from "react";

import { TbArrowBackUp } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import Loader from "../components/UI/Loader";
import Success from "../components/UI/Success";
import { registerUser } from "../utils/auth";

type Error = { status: boolean; message: string };

interface IRegistrationProps {}

const Registration: React.FunctionComponent<IRegistrationProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSucces] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error>({
    status: false,
    message: "Ошибка",
  });

  const navigate = useNavigate();

  function handleRegisterUser(
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    passowrd: string
  ) {
    e.preventDefault();
    setIsLoading(true);
    error.status = false;
    registerUser(email, passowrd)
      .then(({ user }) => {
        setIsSucces(true);
        setTimeout(() => {
          setIsSucces(false);
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        setError({ status: true, message: error.code });
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="registration">
      <div className="registration__container">
        {isSuccess ? <Success /> : undefined}
        {isLoading ? <Loader /> : undefined}
        <Link to="/login" className="back">
          <TbArrowBackUp />
          <span>Назад</span>
        </Link>
        <h1>Регистрация</h1>
        <RegistrationForm handleRegisterUser={handleRegisterUser} />
        {error.status ? (
          <div className="error">{error.message}</div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Registration;

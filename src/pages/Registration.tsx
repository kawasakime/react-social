import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as React from "react";

import { TbArrowBackUp } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "../components/Forms/RegistrationForm";
import Loader from "../components/UI/Loader";
import Success from "../components/UI/Success";
import { auth } from "../firebase";

export type AuthError = { status: boolean; message: string };

interface IRegistrationProps {}

const Registration: React.FunctionComponent<IRegistrationProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSucces] = React.useState<boolean>(false);
  const [error, setError] = React.useState<AuthError>({
    status: false,
    message: "Ошибка",
  });

  const navigate = useNavigate();

  console.log(auth.currentUser);

  function handleRegisterUser(
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    password: string,
    name: string
  ) {
    e.preventDefault();
    setIsLoading(true);
    error.status = false;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => updateProfile(user, { displayName: name }))
      .then(() => {
        setIsSucces(true);
        setTimeout(() => {
          setIsSucces(false);
          navigate("/");
        }, 1500);
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

import * as React from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, update } from "firebase/database";

import { TbArrowBackUp } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "../components/Forms/RegistrationForm";
import Loader from "../components/UI/Loader";
import Success from "../components/UI/Success";
import { auth, database } from "../firebase";
import { getDefaultPhoto } from "../utils/getPhotos";

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

  const handleRegisterUser = async (
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    password: string,
    name: string
  ) => {
    e.preventDefault();
    setIsLoading(true);
    error.status = false;

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {

        const imgUrl:string = await getDefaultPhoto();

        const data = {
          uid: user.uid,
          name: name,
          email: email,
          imgUrl: imgUrl,
          chats: [],
        };

        const updates: any = {};
        updates[`/users/${data.uid}`] = data;

        await update(ref(database), updates);
        await updateProfile(user, { displayName: name });
        await updateProfile(user, { photoURL: imgUrl})
      })
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
  };

  React.useEffect(() => {}, []);

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
        {error.status ? <div className="error">{error.message}</div> : undefined}
      </div>
    </div>
  );
};

export default Registration;

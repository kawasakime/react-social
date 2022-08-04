import * as React from "react";
import { BsChatLeftFill } from "react-icons/bs";
import LoginForm from "../components/Forms/LoginForm";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setUser } from "../redux/slices/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthError } from "./Registration";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const dispatch = useAppDispatch();

  const [error, setError] = React.useState<AuthError>({
    status: false,
    message: "Ошибка",
  });

  const handleLoginUser = async (
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          const userObj = {
            email: user.email,
            id: user.uid,
            token: await user.getIdToken(),
            name: user.displayName
          };
          dispatch(setUser({ ...userObj }));
        })
        .catch((error) => {
          setError({status: true, message: error.message})
        });
    } catch (error) {
      console.log("Ошибка", error);
    }
  };

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
        <LoginForm handleLogin={handleLoginUser} />
        {error.status ? (
          <div className="error">{error.message}</div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Login;

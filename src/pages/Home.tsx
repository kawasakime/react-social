import * as React from "react";
import { useAuth } from "../hooks/useAuth";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const user = useAuth();

  return (
    <div className="homepage">
      ПОЧТА = {user.email}, 
      ТОКЕН = {user.token}, 
      ID = {user.id}
    </div>
  );
};

export default Home;

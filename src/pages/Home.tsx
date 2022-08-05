import * as React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";

import unknowPhoto from "../assets/images/robot.png";
import { useNavigate } from "react-router-dom";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const user = useAuth();

  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="profile-block">
          <h3>{user.name}</h3>
          <i>{user.email}</i>
          <img src={unknowPhoto} alt="" />
        </div>
        <div className="chat-block">
          <span>
            <BsFillChatLeftFill />
          </span>
          <p>Чаты</p>
        </div>        
        <div className="users-block" onClick={() => {navigate("/users")}}>
          <span>
            <FiUsers />
          </span>
          <p>Пользователи</p>
        </div>
        </div>
      </div>
  );
};

export default Home;

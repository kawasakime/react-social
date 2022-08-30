import * as React from "react";
import { useAuth } from "../hooks/useAuth";
import { FiLogOut, FiUsers } from "react-icons/fi";

import unknowPhoto from "../assets/images/nophoto.png";
import { Link } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const user = useAuth();

  return (
    <header className="header">
      <div className="wrapper">
        <ul className="nav">
          <Link to="/users">
            <li>
              Пользователи{" "}
              <span>
                <FiUsers />
              </span>
            </li>
          </Link>
          <li></li>
        </ul>

        <div className="profile">
          <img src={unknowPhoto} alt="" className="profile-image" />
          <div className="profile-username">{user.name}</div>
        </div>
        <div className="logout">
          <FiLogOut />
        </div>
      </div>
    </header>
  );
};

export default Header;

import { getDownloadURL, ref } from "firebase/storage";
import * as React from "react";
import { storage } from "../firebase";
import { BsFillChatLeftFill, BsFillPersonFill } from "react-icons/bs";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  imageUrl?: string;
}

interface UserItemProps {
  user: IUser;
}

const UserItem: React.FunctionComponent<UserItemProps> = ({ user }) => {
  const [imgUrl, setImgUrl] = React.useState("");

  const imgRef = ref(storage, "images/robot.png");

  getDownloadURL(imgRef)
    .then((url) => {
      setImgUrl(url);
    })
    .catch((err) => console.log(err));

  return (
    <div className="user-item">
      <img className="user-item__photo" src={imgUrl} alt="" />
      <p className="user-item__name">{user.name}</p>
      <div className="user-item__btns">
        <button className="open-profile">
          <BsFillPersonFill />
        </button>
        <button className="open-chat">
          <BsFillChatLeftFill />
        </button>
      </div>
    </div>
  );
};

export default UserItem;

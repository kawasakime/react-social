import { ref } from "firebase/storage";
import * as React from "react";
import { storage } from "../firebase";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllUsers, Status } from "../redux/slices/allUsersSlice";
import Loader from "./UI/Loader";
import UserItem from "./UserItem";

interface UsersProps {}

const Users: React.FunctionComponent<UsersProps> = (props) => {
  const { users, status } = useAppSelector((state) => state.allUsers);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []); //eslint-disable-line

  if (status === Status.LOADING) {
    return <Loader />;
  }

  // const sRef = ref(storage, "robot.png");
  // console.log(sRef);

  return (
    <div className="wrapper">
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.uid} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default Users;

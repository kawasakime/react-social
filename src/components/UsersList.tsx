import * as React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllUsers, Status } from "../redux/slices/allUsersSlice";

interface IUsersListProps {}

const UsersList: React.FunctionComponent<IUsersListProps> = (props) => {
  const { users, status} = useAppSelector((state) => state.allUsers);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllUsers())
  }, []);

  return (
    <div>
      {status === Status.LOADING ? <div>ЗАГРУЗКА</div> : users.map(user => user.name)}
    </div>
  );
};

export default UsersList;

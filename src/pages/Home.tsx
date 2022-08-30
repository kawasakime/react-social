import * as React from "react";
import { useAuth } from "../hooks/useAuth";

import { FiUsers, FiSettings, FiMessageSquare, FiLogOut } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import EditableInput from "../components/UI/EditableInput";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addPost, getPosts } from "../redux/slices/postsSlice";
import { usePosts } from "../hooks/usePosts";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const user = useAuth();

  const userId: any = user.id;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.posts.posts);
  const posts = usePosts(allPosts, userId)

  React.useEffect(() => {
    dispatch(getPosts());
  }, []); //eslint-disable-line

  const [postInputValue, setPostInputValue] = React.useState<string>("");

  function onChangeValue(e: React.ChangeEvent<HTMLDivElement>) {
    setPostInputValue(e.target.innerText);
  }

  function sendPost(text: string) {
    if (text !== "") {
      const data = {
        userId: user.id as string,
        post: { id: posts.length, date: new Date().toJSON(), text: text },
      };

      dispatch(addPost(data));
      dispatch(getPosts());
    }
  }

  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="profile-block">
          <h3>{user.name}</h3>
          <i>{user.email}</i>
          <img src={user.imgUrl || ""} alt="" />
        </div>
        <div className="btn-chat">
          <span>
            <FiMessageSquare />
          </span>
          <p>Чаты</p>
        </div>
        <div
          className="btn-users"
          onClick={() => {
            navigate("/users");
          }}>
          <span>{<FiUsers />}</span>
          <p>Пользователи</p>
        </div>
        <div className="btn-settings">
          <span>
            <FiSettings />
          </span>
          <p>Настройки</p>
        </div>
        <div className="btn-logout">
          <span>
            <FiLogOut />
          </span>
          <p>Выход</p>
        </div>
        <div className="posts__block">
          <EditableInput
            className="posts__input"
            placeholder="Что у вас интересного...?"
            content={postInputValue}
            onChange={onChangeValue}
            sendPostHandler={sendPost}
          />
          <div className="posts__list">
            <h4>Количество постов: {posts.length}</h4>
            {posts
              .map((post) => (
                <div className="postItem" key={post.id}>
                  {post.text}
                  <MdDeleteOutline className="remove-btn" />
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

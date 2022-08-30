import { Status } from "../redux/slices/allUsersSlice";

export interface IPost {
  id: number;
  date: any;
  text: string;
}

export type AllPosts = {
  [key: string]: IPost[];
};

export interface PostState {
  posts: AllPosts;
  status: Status;
}
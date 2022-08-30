import { useAppSelector } from "./reduxHooks";

export function useAuth() {
  const {email, token, id, name, imgUrl} = useAppSelector(state => state.user)

  return {
    isAuth: !!token,
    email,
    token,
    id,
    name,
    imgUrl
  }
}
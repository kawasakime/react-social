import { useAppSelector } from "./reduxHooks";

export function useAuth() {
  const {email, token, id, name} = useAppSelector(state => state.user)

  return {
    isAuth: !!token,
    email,
    token,
    id,
    name
  }
}
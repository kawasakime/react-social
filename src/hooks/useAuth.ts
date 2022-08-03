import { useAppSelector } from "./reduxHooks";

export function useAuth() {
  const {email, token, id} = useAppSelector(state => state.user)

  return {
    isAuth: !!token,
    email,
    token,
    id
  }
}
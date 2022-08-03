import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (email: string, password: string) => {
  const auth = await getAuth();
  return await createUserWithEmailAndPassword(auth, email, password)
}


  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
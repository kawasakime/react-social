import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";

export const getDefaultPhoto = async () => {
  const url: string = await getDownloadURL(ref(storage, "images/robot.png"))
  console.log(url)
  return url
};

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";
import LogInForm from "../login/login.component";

const SignIn = () => {
  //   useEffect(async () => {
  //     const responseFromGoogleRedirect = await getRedirectResult(auth);
  //     console.log(responseFromGoogleRedirect);
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    console.log(user);
    createUserDocumentFromAuth(user);
  };
  //   const logGoogleRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //   };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google account</button>
      <LogInForm />
    </div>
  );
};

export default SignIn;

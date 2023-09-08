import { useEffect, useState, useContext } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./login.styles.scss";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  //   useEffect(async () => {
  //     const responseFromGoogleRedirect = await getRedirectResult(auth);
  //     console.log(responseFromGoogleRedirect);
  //   }, []);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChangeFields = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  //   const logGoogleRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            required
            value={email}
            onChange={handleChangeFields}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            required
            value={password}
            onChange={handleChangeFields}
          />
        </div>

        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      <button onClick={signInWithGoogle}>Log In with Google account</button>
    </div>
  );
};

export default LogInForm;

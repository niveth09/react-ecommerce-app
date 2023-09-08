import { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";
import "./sign-up.styles.scss";
import { UserContext } from "../../contexts/user.context";
import LogInForm from "../login/login.component";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { userName });
      resetFormFields();
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Don't have an account?</h1>
      <h1>Sign In with Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            name="userName"
            type="text"
            required
            value={userName}
            onChange={handleChangeFields}
          />
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={handleChangeFields}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <LogInForm />
    </div>
  );
};

export default SignUpForm;

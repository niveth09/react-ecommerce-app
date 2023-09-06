import { useState } from "react";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, confirmPassword } = formFields;

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div>
      <h1>Login with Email and Password</h1>
      <form>
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
            type="text"
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
          <button type="submit" onClick={handleChangeFields}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;

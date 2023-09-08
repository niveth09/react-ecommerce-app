import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignUpForm from "./routes/sign-up/sign-up.component";

const Shop = () => {
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import TopNavigator from "./components/top-navigator/top-navigator.component";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/home" index element={<Home />} />
      <Route path="/nav" index element={<TopNavigator />} />
    </Routes>
  );
};

export default App;

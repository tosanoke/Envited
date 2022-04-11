import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME } from "./routes";
import Home from "../pages/Home";

const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigator;

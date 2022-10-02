import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, CREATE, EVENT, NOTFOUND } from "./routes";
import Home from "../pages/Home";
import { CreateEvents } from "../pages/CreateEvents/CreateEvents";
import { Eventspage } from "../pages/Eventspage/Eventspage";
import { NotFound } from "../pages/NotFound/NotFound";

const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={CREATE} element={<CreateEvents />} />
        <Route path={EVENT} element={<Eventspage />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigator;

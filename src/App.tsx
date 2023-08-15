import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import TokenHanderPage from "./Pages/TokenHanderPage";
import PrivateRoute from "./Other/PrivateRoute";
import ProfilePage from "./Pages/ProfilePage";
import { store } from ".";

const App = () => {
  const isAuth = store.isAuth;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<ProfilePage />}></Route>
        </Route>
        //#region AuthPath
        <Route path="/auth/:token" element={<TokenHanderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/login/:loginForm" element={<LoginPage />}></Route>
        //#endregion
      </Routes>
    </BrowserRouter>
  );
};

export default App;

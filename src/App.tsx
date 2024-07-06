import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {selectAccessToken} from "./store/user";
import {useAppSelector} from "./store";

import AuthLayout from "./components/layouts/AuthLayout";
import Auth from "./pages/guest/Auth";
import VerifyEmail from "./pages/guest/VerifyEmail";
import Todos from "./pages/user/Todos";
import UserLayout from "./components/layouts/UserLayout";

const App = () => {
  const accessToken = useAppSelector(selectAccessToken);

  return (
    <div className="App">
      <Routes>
        {accessToken ? (
          <Route element={<UserLayout/>}>
            <Route path="/" element={<Todos/>}/>
            <Route path="/about" element={<div>About</div>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Route>
        ) : (
          <Route element={<AuthLayout/>}>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/verify/:token" element={<VerifyEmail />}/>
            <Route path="*" element={<Navigate to="/auth" replace/>}/>
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;

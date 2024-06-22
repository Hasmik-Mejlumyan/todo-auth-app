import React from 'react';
import {Routes, Route} from "react-router-dom";

import AuthLayout from "./components/layouts/AuthLayout";
import Auth from "./pages/guest/Auth";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/auth" element={<Auth />}/>
        </Route>

        <Route path="/" element={<div>Home</div>}/>
        <Route path="/about" element={<div>About</div>}/>
      </Routes>
    </div>
  );
}

export default App;

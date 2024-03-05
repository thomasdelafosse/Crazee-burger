import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/pages/login/LoginPage";
import ErrorPage from "./Components/pages/error/ErrorPage";
import OrderPage from "./Components/pages/order/OrderPage";
import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("");

  const userContextValue = { username, setUsername };

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

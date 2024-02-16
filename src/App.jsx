import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/pages/login/LoginPage";
import ErrorPage from "./Components/pages/error/ErrorPage";
import OrderPage from "./Components/pages/order/OrderPage";
import "react-toastify/dist/ReactToastify.css";
import AdminPanelContext from "./context/AdminPanelContext";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <AdminPanelContext.Provider
      value={{
        isChecked,
        setIsChecked,
      }}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:inputValue" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AdminPanelContext.Provider>
  );
}

export default App;

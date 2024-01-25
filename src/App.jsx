import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/pages/login/LoginPage";
import ErrorPage from "./Components/pages/error/ErrorPage";
import OrderPage from "./Components/pages/order/Main/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:inputValue" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

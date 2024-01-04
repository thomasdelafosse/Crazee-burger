import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/pages/login/LoginPage";
import OrderPage from "./Components/pages/order/OrderPage";
import ErrorPage from "./Components/pages/error/ErrorPage";

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

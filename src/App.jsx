import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/pages/login/LoginPage";
import ErrorPage from "./Components/pages/error/ErrorPage";
import OrderPage from "./Components/pages/order/OrderPage";
import "react-toastify/dist/ReactToastify.css";

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

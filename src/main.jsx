import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <OrderContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OrderContextProvider>,
);

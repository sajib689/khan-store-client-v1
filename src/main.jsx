import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-montFont bg-gradient-to-r from-blue-100 to-cyan-100">
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
   
  </div>
);

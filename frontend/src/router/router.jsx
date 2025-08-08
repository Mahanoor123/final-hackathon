import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Unauthorized from "../notfound/Unauthorized";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", index: true, element: <Home /> },
    ],
  },
 
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Register /> },
  { path: "/unauthorized", element: <Unauthorized /> },

]);

export default router;

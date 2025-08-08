import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HijabGallery from "../pages/HijabGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", index: true, element: <Home /> },
      { path: "/hijabs", index: true, element: <HijabGallery /> }
      
    ],
  },
 
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Register /> },

]);

export default router;

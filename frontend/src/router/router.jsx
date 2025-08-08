import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HijabGallery from "../pages/HijabGallery";
import ReviewModal from "../components/ReviewModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "/hijabs", element: <HijabGallery /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "add-review", element: <ReviewModal /> },
]);

export default router;

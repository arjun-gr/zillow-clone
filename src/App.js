import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/homes",
    element: <Buy/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import "./App.css";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </Link>
        </div>
      ),
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <SignIn />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <SignUp />,
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;

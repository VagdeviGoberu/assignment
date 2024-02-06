import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);
function App() {
  return <RouterProvider router={router} />
}
export default App;





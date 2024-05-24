import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

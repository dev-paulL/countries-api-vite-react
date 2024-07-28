import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Country from "../src/pages/Country";
import "./global.css";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/Header";

// Creating router with react-router-dom
const router = createBrowserRouter([
  {
    path: "/countries-api-vite-react/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/countries-api-vite-react/:countryName",
    element: (
      <>
        <Header />
        <Country />
      </>
    ),
    errorElement: <div>This country doesn't exist</div>,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

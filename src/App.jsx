import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import "./global.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import { CountriesProvider } from "./context/CountriesContext";

// Creating router with react-router-dom
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:countryName",
    element: <Country />,
    errorElement: <div>This country doesn't exist</div>,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <Header />
        <RouterProvider router={router}></RouterProvider>
      </CountriesProvider>
    </ThemeProvider>
  );
}

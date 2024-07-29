import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import "./global.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import { CountriesProvider } from "./context/CountriesContext";

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
    <CountriesProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </CountriesProvider>
  );
}

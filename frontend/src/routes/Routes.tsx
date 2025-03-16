import { createBrowserRouter } from "react-router";
import App from "../App";
// import { HomePage } from "../pages/homePage/HomePage";
import { SearchPage } from "../pages/searchPage/SearchPage";
import { CompanyPage } from "../pages/companyPage/CompanyPage";
// import { Bookables } from "../pages/booking/Bookables";
import { Bookings } from "../pages/booking/Bookings";
import { Users } from "../pages/booking/Users";
import { BookablesPage } from "../pages/bookables/BookablesPage";
// import { UserPicker } from "../components/users/UserPicker";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "", element: <HomePage /> },
      
      { path: "search", element: <SearchPage /> },
      { path: "company/:ticker", element: <CompanyPage /> },
      { path: "/bookablesPage", element: <BookablesPage /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/users", element: <Users /> },
      // {path: "/userPicker", element: <UserPicker/>}

    ],
  },
]);

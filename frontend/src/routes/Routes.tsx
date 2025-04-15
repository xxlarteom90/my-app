import { createBrowserRouter } from "react-router";
import App from "../App";
// import { HomePage } from "../pages/homePage/HomePage";
import { SearchPage } from "../pages/searchPage/SearchPage";
import { CompanyPage } from "../pages/companyPage/CompanyPage";
// import { Bookables } from "../pages/booking/Bookables";
import { Bookings } from "../pages/booking/Bookings";
import { BookablesPage } from "../pages/bookables/BookablesPage";
import { UsersPage } from "../pages/users/UsersPage";
import { SayHello } from "../pages/helloPage/SayHello";
import { WindowSizeHello } from "../pages/helloPage/WindowSizeHello";
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
      { path: "/users", element: <UsersPage /> },
      { path: "/sayHello", element: <SayHello /> },
      { path: "/windowsSize", element: <WindowSizeHello /> },
      // {path: "/userPicker", element: <UserPicker/>}

    ],
  },
]);

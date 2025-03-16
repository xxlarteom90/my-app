import { Navbar } from "react-bootstrap";
// import { QuestionCard } from "./components/QuestionCard";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { UserPicker } from "./components/users/UserPicker";
// import { QuestionCard } from "./components/QuestionCard";

function App() {
  // const questionsList = [
  //   {
  //     questionText: "Question1",
  //     answerText: "Answer1",
  //   },
  //   {
  //     questionText: "Question2",
  //     answerText: "Answer2",
  //   },
  //   {
  //     questionText: "Question3",
  //     answerText: "Answer3",
  //   },
  // ];

  return (
    <>
      {/* <Router>
      
    </Router> */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/bookablesPage" className="btn btn-header">
                <span>Bookables</span>
              </Link>
              <Link to="/bookings" className="btn btn-header">
                <span>Bookings</span>
              </Link>
              <Link to="/users" className="btn btn-header">
                <span>Users</span>
              </Link>

              <UserPicker />
            </li>
          </ul>
        </nav>
      </header>

      <Navbar />
      <Outlet />

      {/* <div className="p-5">
        <QuestionCard questionList={questionsList} />
      </div> */}
    </>
  );
}

export default App;

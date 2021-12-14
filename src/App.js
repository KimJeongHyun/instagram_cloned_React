import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;

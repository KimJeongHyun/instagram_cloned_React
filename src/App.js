import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import LoginPage from "./pages/Login/Login";
import MainPage from "./pages/Main/Main";
import RegisterPage from "./pages/Register/Register"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/Register' element={<RegisterPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;

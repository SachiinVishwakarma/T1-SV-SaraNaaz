import LandingPage from "./Pages/LandingPage.js";
import SignupPage from "./Pages/SignupPage.js";
import LoginPage from "./Pages/LoginPage.js";
 import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<LandingPage />}></Route>
  <Route path='/signup' element={<SignupPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
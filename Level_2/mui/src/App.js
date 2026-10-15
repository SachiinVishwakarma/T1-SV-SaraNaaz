import LandingPage from "./Pages/LandingPage.js";
import SignupPage from "./Pages/SignupPage.js";
import LoginPage from "./Pages/LoginPage.js";
import DashOverview from "./Pages/DashOverview.js";
import DashProfile from "./Pages/DashProfile.js";
import DashSecurity from "./Pages/DashSecurity.js";
import DashNotification from "./Pages/DashNotification.js";
import DashHelpSupport from "./Pages/DashHelpSupport.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<LandingPage />}></Route>
  <Route path='/signup' element={<SignupPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/DashBoard/Overview' element={<DashOverview />}></Route>
    
<Route path="/DashBoard/Profile" element={<DashProfile />} />
<Route path="/DashBoard/Security" element={<DashSecurity />} />
<Route path="/DashBoard/Notification" element={<DashNotification />} />
<Route path="/DashBoard/Help&Support" element={<DashHelpSupport />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
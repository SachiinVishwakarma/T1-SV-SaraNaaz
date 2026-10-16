import LandingPage from "./Pages/LandingPage.js";
import SignupPage from "./Pages/SignupPage.js";
import LoginPage from "./Pages/LoginPage.js";
import DashboardPage from "./Pages/DashboardPage.js";

import DashOverview from "./DashboardCards/OverviewCard/OverviewCard.js";
import DashProfile from "./DashboardCards/ProfileCard/ProfileCard.js";
import DashSecurity from "./DashboardCards/SecurityCard/SecurityCard.js";
import DashNotification from "./DashboardCards/NotificationCard/NotificationCard.js";
import DashHelpSupport from "./DashboardCards/HelpSupportCard/HelpSupportCard.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
   
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage />}></Route>
    <Route path='/signup' element={<SignupPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>

    <Route path="/DashBoard" element={<DashboardPage />} >


       <Route path='Overview' element={<DashOverview />}/>
    
       <Route path="Profile" element={<DashProfile />} />
       <Route path="Security" element={<DashSecurity />} />
       <Route path="Notification" element={<DashNotification />} />
       <Route path="Help&Support" element={<DashHelpSupport />} />

    </Route>

  </Routes>
 </BrowserRouter>
  );
}

export default App;
import LandingPage from "./Pages/LandingPage.js";
 import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<LandingPage />}>  </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
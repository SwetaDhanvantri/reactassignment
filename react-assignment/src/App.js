import Navbar from "./components/inc/Navbarcomp";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import Navbarcomp from "./components/inc/Navbarcomp";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    
         <BrowserRouter>
           <div>
            <Navbarcomp/>
           

           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/courses" element={<Courses />} />
           <Route path="/about" element={<About />} />
   
           </Routes>

           </div>
         </BrowserRouter> 
         
  );
}

export default App;

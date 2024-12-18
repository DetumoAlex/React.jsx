
import Body from "./components/Body"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
      
    </div>
  )
}



export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import Form from "./components/Form"; // Make sure this component exists

// const App = () => {
//   return (
//     <Router>
//       {/* Navbar is always visible */}
//       <Navbar />
//       <Body />
//       {/* Define routes for pages */}
//       <Routes>
//         <Route path="/" element={<Body />} />
//         <Route path="/form" element={<Form />} />
//       </Routes>

//       {/* Footer is always visible */}
//       <Footer />
//     </Router>
//   );
// };

// export default App;


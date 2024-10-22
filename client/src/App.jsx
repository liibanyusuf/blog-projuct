import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/homepage/Home';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Single from './pages/single/Single';
import About from './pages/about/About'; 
import Contact from './pages/contact/Contact';  // Add your contact page

import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context); // Update based on your auth logic
  //console.log(user , 'this liban username');
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:PostId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

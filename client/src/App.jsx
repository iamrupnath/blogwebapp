import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;

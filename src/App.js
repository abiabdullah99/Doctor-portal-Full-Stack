import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Navbar/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
const App = () => {
  return (
   <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
   </div>
  );
};

export default App;
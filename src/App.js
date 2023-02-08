import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom'
import Navbar from './pages/Navbar';
import Aboutexam from './pages/Aboutexam'
import Batch from './pages/Batch'
import Getstarted from './pages/Getstarted'
import Educator from './pages/Educator'
import Store from './pages/Store'
import Subscription from './pages/Subscription'
import Successstories from './pages/Successstories'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return(

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navbar />}>
    <Route path='/educator' element={<Educator />}></Route>
    <Route path='/batch' element={<Batch />}></Route>
    <Route path='/store' element={<Store />}></Route>
    <Route path='/subscriptionplan' element={<Subscription />}></Route>
    <Route path='/successstories' element={<Successstories />}></Route>
    <Route path='/aboutexam' element={<Aboutexam />}></Route>
    
    </Route>
  </Routes>
  </BrowserRouter>
  )
 
}

export default App;

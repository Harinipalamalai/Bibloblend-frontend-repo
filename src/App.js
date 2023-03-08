import React from 'react';
import './App.css';
import Bibloblend from './bibloblend';
import Home from './home';
import Login from './login';
import Homepage from './homepage';
import Post from './post';
import Posts from './posts';
import Back from './back';
import Delete from './delete';
import Input from './input';
import Puts from './puts';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Bibloblend/>}></Route>
        <Route exact path='/bibloblend' element={<Bibloblend/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/homepage' element={<Homepage/>}></Route>
        <Route exact path='/post' element={<Post/>}></Route>
        <Route exact path='/posts' element={<Posts/>}></Route>
        <Route exact path='/back' element={<Back/>}></Route>
        <Route exact path='/delete' element={<Delete/>}></Route>
        <Route exact path='/input' element={<Input/>}></Route>
        <Route exact path='/puts' element={<Puts/>}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;

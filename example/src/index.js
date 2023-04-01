import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import UserList from './components/UserList';
import UserAdd from './components/UserAdd';
import UserEdit from './components/UserEdit';
import UserTrash from './components/UserTrash';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<UserList/>}/>
    <Route path='/useradd' element={<UserAdd/>}/>
    <Route path='/useredit/:id' element={<UserEdit/>}/>
    <Route path='/usertrash' element={<UserTrash/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
);


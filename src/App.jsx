import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './users-list';
import Create from './add_user';
import Read from './read';
import Update from './update';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </Router>
  );
}

export default App;

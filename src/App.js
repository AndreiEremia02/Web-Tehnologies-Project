import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContexts';
import Header from './components/Header';
import Board from './components/Board';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Board />
              </div>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';

const Container = styled.div``;
function App() {
  return (
    <Router>
      <Container>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Collection from './pages/Collection';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Training from './pages/Training';
import Welcome from './pages/Welcome';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
function App() {
  // const location = useLocation();
  // const withoutNav = ['training'];
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={<Library />} />
          <Route path="/training" element={<Training />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/collections/:id" element={<Collection />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

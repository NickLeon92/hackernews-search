import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import History from './pages/History'
import Search from './components/Search';
import Home from './pages/Home'

function App() { 
  return (
    <Router>
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Hacker News</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/search"><Nav.Link>Search</Nav.Link></LinkContainer>
            <LinkContainer to="/history"><Nav.Link>History</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

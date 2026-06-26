import './index.css';

// Components
import Home from './components/pages/Home';
import Report from './components/pages/Report';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/report/:id" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;

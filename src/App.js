import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route element = {<HomePage />} path ="/" exact />   
      <Route element = {<LoginPage />} path ="/login" />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>

      


      </Router>
      
    </div>
  );
}

export default App;

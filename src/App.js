import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
      <Routes>
      <Route element = {<PrivateRoute> <HomePage /> </PrivateRoute>} path ="/" exact />   
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
      </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;

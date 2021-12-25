import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import MyRoute from './utils/MyRoute';
import { AuthProvider } from './context/AuthProvider';
import Header from './components/Header';
import Register from './pages/Register';
import Navbar2 from './components/Navbar';
import PostLogic from './pages/PostLogic';
import {PostProvider} from './context/PostProvider';
import Alert from './utils/Alert';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
      <PostProvider>
      <Navbar2/>
      <Alert/>
      <Routes>
      <Route element = {<PrivateRoute> <HomePage /> </PrivateRoute>} path ="/" exact />   
      <Route element = { <LoginPage />} path ="/login" />
      <Route element = {<Register />} path = "/register" />
      <Route element = {<PostLogic />} path = "/posts/:id" />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <h1>There's nothing here!</h1>
        </main>
      }
    />
      </Routes>
      <Footer />
      </PostProvider>
      </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;

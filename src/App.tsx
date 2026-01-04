import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import ClientDetail from './pages/ClientDetail';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProjectManagement from './pages/admin/ProjectManagement';
import ServicesManagement from './pages/admin/ServicesManagement';

function App() {
  return (
    <AuthProvider>
      <Router basename="/prj1">
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute><ServicesManagement /></ProtectedRoute>} />
          <Route path="/admin/clients/:clientId/projects" element={<ProtectedRoute><ProjectManagement /></ProtectedRoute>} />
          <Route path="*" element={
            <div className="min-h-screen bg-white">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/clients/:slug" element={<ClientDetail />} />
              </Routes>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import Layout from './components/layout/Layout';

// Placeholder Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WatchPage from './pages/WatchPage';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <CourseProvider>
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/courses" element={<Courses />} />
                                <Route path="/courses/:id" element={<CourseDetail />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/courses/:id/watch" element={<WatchPage />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Layout>
                    </Router>
                </CourseProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;


import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Resources from './pages/Resources.tsx';
import Notices from './pages/Notices.tsx';
import AIAssistant from './pages/AIAssistant.tsx';
import Routine from './pages/Routine.tsx';
import AdminLogin from './pages/AdminLogin.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/ai" element={<AIAssistant />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-gray-200 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-2">
                  <div className="bg-indigo-600 p-1.5 rounded-lg">
                    <i className="fas fa-graduation-cap text-white text-sm"></i>
                  </div>
                  <span className="text-xl font-bold text-gray-800">Scholars Hub</span>
                </div>
                <p className="mt-3 text-sm text-gray-400 max-w-xs">
                  Collaborative academic resource platform for CSE Scholars.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Platform</h4>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li><Link to="/resources" className="hover:text-indigo-600 transition-colors">Notes</Link></li>
                    <li><Link to="/routine" className="hover:text-indigo-600 transition-colors">Routine</Link></li>
                    <li><Link to="/notices" className="hover:text-indigo-600 transition-colors">Notices</Link></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Support</h4>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
                    <li><Link to="/admin" className="hover:text-indigo-600 transition-colors">Admin Login</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                &copy; {new Date().getFullYear()} University of Scholars. Designed for CSE Students.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><i className="fab fa-github"></i></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;

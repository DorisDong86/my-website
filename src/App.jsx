import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import TimeTracker from './pages/TimeTracker';
import Footer from './components/Footer'; // 导入 Footer 组件

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/timetracker" element={<TimeTracker />} />
          </Routes>
        </div>
        <Footer /> {/* 添加 Footer 组件 */}
      </div>
    </Router>
  );
}

export default App;

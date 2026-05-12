import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResumePage } from './pages/ResumePage';

export default function App() {
  return (
    <Router>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

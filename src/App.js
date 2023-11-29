import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DiaryPage from './pages/Diary';
import LoginPage from './pages/Login';
import './style/globals.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/calendar" element={<MainPage />} />
      <Route path="/diary/*" element={<DiaryPage />} />
    </Routes>
  );
}

export default App;

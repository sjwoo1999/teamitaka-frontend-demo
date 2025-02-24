import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import EvaluationPage from './pages/EvaluationPage';
import { HomePage } from './pages/HomePage';
import { FilesPage } from './pages/FilesPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfilePage } from './pages/ProfilePage';
import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background-color: #f5f5f5;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 60px; /* 네비게이션 바 높이 고려 */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Routes>
            {/* 유저 ID를 파라미터로 받아서 EvaluationPage에서 처리 */}
            <Route path="/evaluate/:userId" element={<EvaluationPage />} />
            
            <Route path="/home" element={<HomePage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Navigation isMobile={true} />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;

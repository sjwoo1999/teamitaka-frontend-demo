import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EvaluationPage } from "./pages/EvaluationPage";
import { HomePage } from "./pages/HomePage"; // 새로 추가
import { FilesPage } from "./pages/FilesPage"; // 새로 추가
import { NotificationsPage } from "./pages/NotificationsPage"; // 새로 추가
import { Navigation } from "./components/Navigation";
import styled, { createGlobalStyle } from "styled-components";

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
            <Route path="/evaluate/:userId" element={<EvaluationPage />} />
            <Route path="/profile" element={<EvaluationPage />} />
            <Route path="/home" element={<HomePage />} /> {/* 홈 페이지 추가 */}
            <Route path="/files" element={<FilesPage />} /> {/* 파일 페이지 추가 */}
            <Route path="/notifications" element={<NotificationsPage />} /> {/* 알림 페이지 추가 */}
            <Route path="/" element={<HomePage />} /> {/* 기본 경로를 홈으로 설정 */}
          </Routes>
          <Navigation />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
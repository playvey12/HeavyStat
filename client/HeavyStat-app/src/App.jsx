import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileComp from './pages/ProfilePage/ProfileComp';
import FooterComp from './components/Footer/FooterComp';
import TrainPlanComp from './pages/TrainPlanPage/TrainPlanComp';
import ProgressComp from './pages/ProgressPage/ProgressComp';
import TrainModeComp from './pages/TrainModePage/TrainModeComp';
import ErorComp from './pages/ErorComp/ErorComp';
import AuthPageComp from './pages/AuthPage/AuthPageComp';
import { useUser } from './utils/contexts/userContext/userContext';



export default function App() {
  const { userName, avatarUrl, authReady, isAuthenticated: sessionAuth } = useUser();

  const isAuthenticated = sessionAuth && userName !== "Пользователь" && userName !== null;

  if (!authReady) {
    return null;
  }


  return (
    <BrowserRouter>
      {!isAuthenticated ? (
        <Routes>
          <Route path="*" element={<AuthPageComp />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<ProfileComp />} />
            <Route path="/trainPlan" element={<TrainPlanComp />} />
            <Route path="/progress" element={<ProgressComp />} />
            <Route path="/trainMode" element={<TrainModeComp />} />
            <Route path="/profile" element={<ProfileComp />} />
            <Route path="/*" element={<ErorComp />} />
          </Routes>
          <FooterComp />
        </>
      )}

    </BrowserRouter>
  );
}
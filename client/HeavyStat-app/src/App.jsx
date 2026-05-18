import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfileComp from './pages/ProfilePage/ProfileComp'
import FooterComp from './components/Footer/FooterComp'
import TrainPlanComp from './pages/TrainPlanPage/TrainPlanComp'
import ProgressComp from './pages/ProgressPage/ProgressComp'
import TrainModeComp from './pages/TrainModePage/TrainModeComp'
import ErorComp from './pages/ErorComp/ErorComp'
export default function App() {
  return (
    <BrowserRouter>                 
<Routes>
<Route path="/" element={<ProfileComp></ProfileComp>}/>

<Route path="/trainPlan" element={<TrainPlanComp></TrainPlanComp>}/>
<Route path="/progress" element={<ProgressComp></ProgressComp>}/>
<Route path="/trainMode" element={<TrainModeComp></TrainModeComp>}/>
<Route path="/profile" element={<ProfileComp></ProfileComp>}/>

<Route path="/*" element={<ErorComp></ErorComp>}/>



</Routes>
<FooterComp/>
    </BrowserRouter>
  )
}

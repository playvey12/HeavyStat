import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserContextProvider from './utils/contexts/userContext/userContext'
import App from './App'
import TrainPlanContextProvider from './utils/contexts/trainPlanContext/trainPlanContext'
import ProgressContextProvider from './utils/contexts/progressContext/progressContext'
import TrainModeContextProvider from './utils/contexts/trainModeContext/trainModeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserContextProvider>
     <TrainPlanContextProvider>
        <ProgressContextProvider>
         <TrainModeContextProvider>
            <App></App>
         </TrainModeContextProvider>
        </ProgressContextProvider>
     </TrainPlanContextProvider>
  </UserContextProvider>
  </StrictMode>
)

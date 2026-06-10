import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme.css'
import './index.css'
import UserContextProvider from './utils/contexts/userContext/userContext'
import ThemeContextProvider from './utils/contexts/themeContext/themeContext.jsx'
import App from './App'
import TrainPlanContextProvider from './utils/contexts/trainPlanContext/trainPlanContext'
import ProgressContextProvider from './utils/contexts/progressContext/progressContext'
import TrainModeContextProvider from './utils/contexts/trainModeContext/trainModeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <TrainPlanContextProvider>
          <ProgressContextProvider>
            <TrainModeContextProvider>
              <App></App>
            </TrainModeContextProvider>
          </ProgressContextProvider>
        </TrainPlanContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </StrictMode>
)
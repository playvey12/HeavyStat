import React, { useEffect,Component, createContext, useContext, useState } from 'react'
import UserService from '../../../services/ProfileService/ProfileService'

import axios from 'axios'

export const  UserContext=createContext()
export default function UserContextProvider({children})  {


//settingModal
const [userName,setUserName]=useState("Пользователь")
const [telegrammUserName,setTgUserName]=useState("@user")
const [avatarUrl,setAvatarUrl]=useState("./avatarImgs/avatar.png")
const [authReady, setAuthReady] = useState(false)
const [isAuthenticated, setIsAuthenticated] = useState(false)

//AIDataModal
const [aiData, setAiData] = useState({
    userWeightForAI: 0,
    userHeightForAI: 0,
    userAgeForAI: 0,
    userSkillForAI: 0,
    userInjuriesForAI: "Нету"
})

//UserData
const [userWeightData,setUserWeightData]=useState({
  userStartWeight:0,
  userGoalWeight:0,
  userWeight:0
})
 const userWeightStats=  [  {
id:1,
text:"Начальный",
userWeight:userWeightData.userStartWeight
  }, 
  {
id:2,
text:"Цель",
userWeight:userWeightData.userGoalWeight
  }, ]
const [measurements, setMeasurements] = useState({
    chest: { value: 0, lastValue: 0 },
    waist: { value: 0, lastValue: 0 },
    hips: { value: 0, lastValue: 0 },
    biceps: { value: 0, lastValue: 0 },
    calf: { value: 0, lastValue: 0 }
  })
//================stats============
const [allStats,setAllStats]=useState({
   totalTon: 0,
    totalWorkouts: 0,
    totalHours: 0
})
 
  //=====================свяязь с серваком========================
const userService= new UserService()

useEffect(() => {
  async function initSession() {
    try {
      const { data: me } = await axios.get('/api/auth/me', { withCredentials: true });
      if (me?.success) {
        setIsAuthenticated(true);
        await loadUserData();
        loadUserMeasurement();
        loadUserAIData();
        loadUserStats();
        loadUserWeights();
      }
    } catch (_) {}
    finally {
      setAuthReady(true);
    }
  }
  initSession();
}, []);


//=============ИМЯ ТГ ИМЯ АВА===============
//username
 async function loadUserData(){
   const userNameData = await userService.getUserName()
    setUserName(userNameData.userName)
    const tgNameData = await userService.getTgUserName()
    setTgUserName(tgNameData.userTgName)
     const avatarData = await userService.getUserAvatar()
    setAvatarUrl(avatarData.avatarUrl)
  }

async function updateUserOnServer(newName){
 const data= await userService.updateUserName(newName)
    setUserName(data.userName)
};
//usertgname
async function updateUserTgName(newTgName){
const data = await userService.updateUserTgName(newTgName)
    setTgUserName(data.userTgName)
};
//avatar
async function updateAvatar(avatarUrl){
const data = await userService.updateUserAvatar(avatarUrl)
    setAvatarUrl(data.avatarUrl)
};
//=======================ЗАМЕРЫ==============================================
 async function loadUserMeasurement(){
   const measurementsData = await userService.getMeasurements()
    setMeasurements(measurementsData)

 }
async function updateMeasurementOnServer(name,value) {
  const updatedMeasurements = await userService.updateMeasurements(name,value)
    setMeasurements(updatedMeasurements)
}
//=================ИИДАННЫЕ=======================
async function loadUserAIData(){
   const UserAIData = await userService.getUserAiData()
    setAiData(UserAIData)
 }
async function updateAiDataOnServer(name, value) {
    const updatedAiData = await userService.updateAiData(name, value)
    setAiData(updatedAiData)
}
//===============statss================
async function loadUserStats(){
   const userStatsData = await userService.getUserStats()
    setAllStats(userStatsData)
 }
async function updateStatsDataOnServer(name, value) {
    const updatedStatsData = await userService.updateStats(name, value)
    setAllStats(updatedStatsData)
}
//=================userWeights==============================
async function loadUserWeights(){
   const UserWeights = await userService.getUserWeights()
    setUserWeightData(UserWeights)
 }
async function updateUserWeightsDataOnServer(name, value) {
    const updatedStatsData = await userService.updateUserWeights(name, value)
    setUserWeightData(updatedStatsData)
}

    return (
      <UserContext.Provider
   value={{userName, setUserName,telegrammUserName,setTgUserName,avatarUrl,setAvatarUrl,setAiData,aiData,userWeightData,setUserWeightData,
measurements,updateUserOnServer,updateUserTgName,updateAvatar,updateMeasurementOnServer,updateAiDataOnServer,updateStatsDataOnServer,allStats,setAllStats,updateUserWeightsDataOnServer,authReady,isAuthenticated }}
      >
        {children}
      </UserContext.Provider>
    )

}
export const useUser = () => useContext(UserContext);
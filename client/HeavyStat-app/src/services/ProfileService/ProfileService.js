import axios from "axios"


class UserService{
constructor(){
    this.api = axios.create({
      baseURL: "/api",
      withCredentials: true,
    });
}
//USERNAME
async getUserName(){
    const response=await this.api.get('/profile/userName')
    return response.data
}

async updateUserName(newName){
    const response=await this.api.put('/profile/userName',{
        userName:newName
    })
    return response.data
}
//userTgName
async getTgUserName(){
    const response=await this.api.get('/profile/telegrammUserName')
    return response.data
}

async updateUserTgName(newTgName){
    const response=await this.api.put('/profile/telegrammUserName',{
        userTgName:newTgName
    })
    return response.data
}
//userAvatar
async getUserAvatar(){
    const response=await this.api.get('/profile/userAvatar')
    return response.data
}

async updateUserAvatar(avatarUrl){
    const response=await this.api.put('/profile/userAvatar',{
        avatarUrl:avatarUrl
    })
    return response.data
}

//=======================ЗАМЕРЫ==============================================
async getMeasurements(){
const response=await this.api.get('/profile/measurements')
    return response.data
}

async updateMeasurements(name,value){
 const response=await this.api.put('/profile/measurements',{
        name:name,
        value:value
    })
    return response.data
}
//=================ИИДАННЫЕ=======================
async getUserAiData(){
    const response =await this.api.get('/profile/userAiData')
      return response.data
}
async updateAiData(name,value){
 const response=await this.api.put('/profile/userAiData',{
        name:name,
        value:value
    })
    return response.data
}

//=================статистикаа=======================
async getUserStats(){
    const response =await this.api.get('/profile/stats')
      return response.data
}
async updateStats(name,value){
 const response=await this.api.put('/profile/stats',{
        name:name,
        value:value
    })
    return response.data
}
//===============userWeight============================
async getUserWeights(){
    const response =await this.api.get('/profile/userWeights')
      return response.data
}
async updateUserWeights(name,value){
 const response=await this.api.put('/profile/userWeights',{
        name:name,
        value:value
    })
    return response.data
}


} 



export default UserService;
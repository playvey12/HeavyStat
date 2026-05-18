
import axios from "axios"


class ProgressService{
constructor(){
    this.api = axios.create({
      baseURL: "/api/progress",
    });
}

async getHistory(){
      const response=await this.api.get('/exerciseRecords')
    return response.data
}

async addNewRecord(exerciseName,newRecordValue){
      const response=await this.api.post('/exerciseRecords',{
exerciseName:exerciseName,
newRecordValue:Number(newRecordValue) 
      })
    return response.data
}

async getMuscleList() {
        const response = await this.api.get('/muscleList')
        return response.data
    }



//====weight cart====
async getWeightHistory() {
        const response = await this.api.get('/weightHistory')
        return response.data
    }

    //add
    async addNewWeightPoint(newWeightPoint){
      const response=await this.api.post('/weightHistory',{
newWeightPoint:newWeightPoint
      })
    return response.data
}

//delete
async deleteLastPoint(pointId){
      const response=await this.api.delete(`/weightHistory/${pointId}`)
    return response.data
}
}
export default ProgressService;

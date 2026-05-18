import axios from "axios"


class PlanService {
    constructor() {
        this.api = axios.create({
            baseURL: "/api/trainPlan",
        })
    }

async getDays(){
    const response=await this.api.get('/days')
    return response.data
}

async getExercisesByDay(dayId){
    const response=await this.api.get(`/exercises/${dayId}`)
    return response.data
}

async addExercise(activeDayId, exerciseData){
    const response = await this.api.post('/exercises', { activeDayId, exerciseData })
    return response.data
}

async deleteExercise(activeDayId,exerciseId){
    const response = await this.api.delete(`/exercises/${activeDayId}/${exerciseId}`)
    return response.data
}
async editExercise(activeDayId,exerciseId, approachId, newWeight ){
    
    const response = await this.api.put('/exercises', { activeDayId, exerciseId, approachId, newWeight })
    return response.data
}
async updateExercise(activeDayId, exerciseId, updatedData){
    const response = await this.api.put(`/exercises/${activeDayId}/${exerciseId}`, updatedData)
    return response.data
}
async getMuscleList() {
    const response = await this.api.get('/muscleList')
    return response.data
}
async addExerciseToLibrary(muscleId, exerciseName) {
    const response = await this.api.post('/muscleList', { 
        newExerciseName: exerciseName, 
        muskuleId: muscleId 
    })
    return response.data
}
async deleteExerciseFromLibrary(muscleId, exerciseName) {
    const response = await this.api.delete(`/muscleList/${muscleId}/${encodeURIComponent(exerciseName)}`)
    return response.data
}


async getPlanTypes() {
    const response = await this.api.get('/planTypes')
    return response.data
}

async generatePlan(typeId) {
    const response = await this.api.get(`/generate/${typeId}`)
    return response.data
}

}

export default PlanService
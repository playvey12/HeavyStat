const express=require('express')
const mainRouter=express.Router()
const profileRouter=require('../profileRouter/profileRouter')
const planRouter = require('../trainPlanRouter/trainPlanRouter')
const progressRouter = require('../progressRouter/progressRouter')



mainRouter.use('/profile',profileRouter)
mainRouter.use('/trainPlan',planRouter)
mainRouter.use('/progress',progressRouter)


module.exports = mainRouter;
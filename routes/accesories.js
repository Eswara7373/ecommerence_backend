const express=require('express');
const accesoriesData1=require("../controllers/accesories")

const mainRouter=express.Router();

mainRouter.get("/accesoriesMainPic", accesoriesData1.getaccesoriesMainPic)
mainRouter.get("/accesoriesData", accesoriesData1.getaccesoriesData)


module.exports = mainRouter
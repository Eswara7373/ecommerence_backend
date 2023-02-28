const express=require('express');
const ipadData1=require("../controllers/ipad")

const mainRouter=express.Router();

mainRouter.get("/ipadMainPic", ipadData1.getipadMainPic)
mainRouter.get("/ipadData", ipadData1.getipadData)


module.exports = mainRouter
const express=require('express');
const iphoneData=require("../controllers/iphone")

const mainRouter=express.Router();

mainRouter.get("/iphoneMainPic", iphoneData.getiphoneMainPic);
mainRouter.get("/iphoneData", iphoneData.getiphoneData);


module.exports = mainRouter
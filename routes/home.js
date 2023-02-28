const express=require('express');
const accesoriespageData=require("../controllers/inside/accesoriespage");
const allpageData=require("../controllers/inside/allpage");
const iphonepageData=require("../controllers/inside/iphonepage");
const ipadpageData=require("../controllers/inside/ipadpage");
const ipodpageData=require("../controllers/inside/ipodpage");
const macbookpageData=require("../controllers/inside/macbookpage");
const mainRouter=express.Router();

// mainRouter.route("/forestDataMore").get(forestData.getforestDataMore);
// mainRouter.route("/forestDataMore1").get(forestData.getforestDataMore1);
// mainRouter.get("/forestDataMore",forestData.getforestDataMore)//new method of getting data from api
mainRouter.get("/allpageData",allpageData.getallpageData)
mainRouter.get("/accesoriespageData",accesoriespageData.getaccesoriespageData)
mainRouter.get("/iphonepageData",iphonepageData.getiphonepageData)
mainRouter.get("/ipadpageData",ipadpageData.getipadpageData)
mainRouter.get("/ipodpageData",ipodpageData.getipodpageData)
mainRouter.get("/macbookpageData",macbookpageData.getmacbookpageData)


module.exports = mainRouter;
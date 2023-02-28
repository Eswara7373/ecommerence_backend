const express=require('express');
const macbookData=require("../controllers/macbook")

const mainRouter=express.Router();

mainRouter.get("/macbookMainPic",macbookData.getmacbookMainPic)
mainRouter.get("/macbookData", macbookData.getmacbookData)


module.exports = mainRouter
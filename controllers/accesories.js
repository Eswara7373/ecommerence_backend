const {findAllFromDb} = require("./connection")

const accesoriesMainPic=async(req,res)=>{
    try {
        const data = await findAllFromDb("accesoriesMainPic");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

const accesoriesData=async(req,res)=>{
    try {
        const data = await findAllFromDb("accesoriesData");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getaccesoriesData=accesoriesData;
module.exports.getaccesoriesMainPic=accesoriesMainPic

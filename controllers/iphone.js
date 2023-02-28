const {findAllFromDb} = require("./connection")

const iphoneMainPic=async(req,res)=>{
    try {
        const data = await findAllFromDb("iphoneMainPic");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

const iphoneData=async(req,res)=>{
    try {
        const data = await findAllFromDb("iphoneData");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getiphoneData=iphoneData;
module.exports.getiphoneMainPic=iphoneMainPic;

const {findAllFromDb} = require("./connection")

const ipadMainPic=async(req,res)=>{
    try {
        const data = await findAllFromDb("ipadMainPic");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

const ipadData=async(req,res)=>{
    try {
        const data = await findAllFromDb("ipadData");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getipadData=ipadData;
module.exports.getipadMainPic=ipadMainPic

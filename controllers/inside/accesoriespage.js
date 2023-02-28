const {findAllFromDb} = require("../connection")

const accesoriespageData=async(req,res)=>{
    try {
        const data = await findAllFromDb("accesoriesData");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getaccesoriespageData=accesoriespageData;

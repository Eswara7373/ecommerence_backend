const {findAllFromDb} = require("./connection")

const macbookMainPic=async(req,res)=>{
    try {
        const data = await findAllFromDb("macbookMainPic");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

const macbookData=async(req,res)=>{
    try {
        const data = await findAllFromDb("macbookData");
        return res.status(200).send(data);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getmacbookData=macbookData;
module.exports.getmacbookMainPic=macbookMainPic

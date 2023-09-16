const UserPost = require("../models/postModel");
const mongoose = require("mongoose");

exports.postDetails = async (req, res) => {

    try {
        const {name, dept, check} = req.body;
        if(!name || !dept || check === false) {

            return res.status(400).json({
                message: "All fields are mandatory!"
            });
        }
    
        const newUser = await UserPost.create({
            name, dept, check
        });


         return res.status(200).send(newUser);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
    
}

exports.getAllPost = async (req, res) => {
    try {

        const getUsers = await UserPost.find({});

        if(!getUsers) {
            return res.status(404).send("No Record found")
        } else {
            return res.status(200).json({
                getUsers
            });
        }
        
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

exports.getSinglePost = async (req, res) => {
    try {
        const userPost = await UserPost.findById(req.params.id).populate(
            ['name', 'dept', 'check', '_id'])
         res.status(200).json({userPost});

        if(!userPost) {
           return res.status(404).send("User not found!");
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.updatedUserPost = async(req, res) => {

   try {

            
            let savedName = req.body.name;
            let savedSector = req.body.dept;
            let savedCheck = req.body.check;
            let id = await UserPost.findById({_id: new mongoose.Types.ObjectId(req.params.id)});
            
        
            if(!id) {
               return res.status(404).send("User not found!");
            }
            const result = await UserPost.findByIdAndUpdate(id, 
                {
                    $set: {name: savedName, dept: savedSector, check: savedCheck}
                }, {new: true})
               return res.status(200).json({result});

   } catch (error) {
     return res.status(500).send({message: error.message});
   }


    

}


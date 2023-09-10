const { Profile } = require("../model/profile");
var mongoose = require('mongoose');

module.exports.createProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        return res.status(201).json(profile);
    } catch (error) {
        console.log(error);
        return res.status(501).json(error);
    }
}

module.exports.fethchProfilebyId = async (req, res) => {
    const id = req.params.id;
    try {

        if (mongoose.Types.ObjectId.isValid(id)) {
            const profile = await Profile.findById(id);
            console.log(profile);

            if (profile != null) {
                return res.status(201).json(profile);
            }
            else {
                return res.status(201).json({ "msg": "user not found" });
            }
        }
        else {
            res.status(501).json({ "msg": "invalid ID" });
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json(error);
    }
}

module.exports.updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).json(profile);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
}

module.exports.deleteProfile = async (req, res)=>{
   try {
       await Profile.findByIdAndDelete(req.params.id);
       return res.status(201).json({});
   } catch (error) { 
       console.log(error);
       return res.status(400).json(error);
   }
}


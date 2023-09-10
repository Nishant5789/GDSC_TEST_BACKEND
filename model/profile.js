const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String },
    PhoneNumber: { type: String, required: true },
    linkdinUrl: { type: String },
});

const virtualId = profileSchema.virtual('id');
virtualId.get(function () {
    return this._id;
})

profileSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

exports.Profile = mongoose.model('Profile', profileSchema)
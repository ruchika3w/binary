import mongoose from "mongoose";

import { v4 as uuid } from "uuid";

const UserSchema = new mongoose.Schema({
    userId: { type: String, default: uuid, unique: true },
    name: { type: String, required: true,  },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true, unique: true },
    sponsorId: { type: String ,required: false },
    sponsorName: { type: String , required: false },
    position: { type: String, required: false },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },

})


const UserModel = mongoose.model("User" , UserSchema )
export{UserModel as User}
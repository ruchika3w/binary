import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    
  name: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true, unique: true },
  sponsorId: { type: String , required : false },
  sponsorName: { type: String, required: false },
  position: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const Adminmodel = mongoose.model("Admin", adminSchema);


export{ Adminmodel as Admin}
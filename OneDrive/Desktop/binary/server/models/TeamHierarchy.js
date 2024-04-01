import mongoose from 'mongoose';

const TeamHierarchySchema = new mongoose.Schema({
    userId: { type: String, ref: 'User' },
    sponsorId: { type: String, ref: 'User' },
    name:{type:String , required : true},
    level: { type: Number, required: true },
    position :{type: String , required:true},
  });

  const TeamHierarchyModel = mongoose.model('TeamHierarchy', TeamHierarchySchema);
  export{ TeamHierarchyModel};
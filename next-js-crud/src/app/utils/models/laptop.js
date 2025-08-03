const { default: mongoose } = require("mongoose");


const LaptopSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique: true
    },
    laptopmodel:{
        type:String,
        required:true,
        unique: true
    },
     laptopprice:{
        type:String,
        required:true
        
    }



},{timestamps:true});

const LaptopModel =mongoose.models.laptop || mongoose.model('laptop',LaptopSchema);

export default LaptopModel;
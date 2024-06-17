import mongoose from "mongoose";

const Artist = new mongoose.Schema({
    name : {type: String, required: true},
    image : {type: String, required: true},
    description : {type: String, required: true},
})


export default mongoose.model("Artist", Artist);
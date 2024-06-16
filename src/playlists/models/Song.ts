import mongoose from "mongoose";

const Song = new mongoose.Schema({
    title : {type: String, required: true},
    year : {type: Number, default: 2024},
    author : {type: String, required: true},
    link : {type: String, required: true},
    playlist : {type: mongoose.Schema.Types.ObjectId, ref : 'Playlist', required: true}
})



export default mongoose.model("Song", Song);
import mongoose from "mongoose";

const Playlist = new mongoose.Schema({
    author : {type: String, required: true},
    name : {type: String, required: true},
    image : {type: String, required: true}
})


export default mongoose.model("Playlist", Playlist);
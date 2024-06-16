import Playlist from "./models/Playlist";


class PlaylistService {
    async getPlaylist(playlistId: string) {
        return await Playlist.findById(playlistId); 
    }
    async createPlaylist(author: string, name: string, songs: string[], image: string) {
        return await Playlist.create({ author, name, songs, image });
    }
    async getPlaylists() {
        return await Playlist.find();
    }
     
    async updatePlaylist(playlistId: string, author: string, name: string, songs: string[], image: string) {
        return await Playlist.findByIdAndUpdate(playlistId, { author, name, songs, image });
    }

    async deletePlaylist(playlistId: string) {
        return await Playlist.findByIdAndDelete(playlistId);
    }
}


export default new PlaylistService;
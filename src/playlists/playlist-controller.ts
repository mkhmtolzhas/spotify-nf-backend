import { Request, Response } from 'express';
import Playlist from './models/Playlist';
import PlaylistService from './playlist-service';
import Song from './models/Song';

class PlaylistController {
    
    async createPlaylist(req: Request, res: Response) : Promise<void> {
        try {
            const { author, name, songs, image } = req.body;
            const playlist = await Playlist.create({ author, name, songs, image });
            res.status(200).json(playlist);
        } catch (error) {
            console.log(error);
        }
    }
    async getPlaylists(req: Request, res: Response) : Promise<void> {
        try {
            const playlists = await Playlist.find();
            res.status(200).json(playlists);
        } catch (error) {
            console.log(error);
        }
    }
    async getPlaylist(req: Request, res: Response) : Promise<void> {
        try {
            const playlistId = req.params.id;
            if (!playlistId) {
                res.status(400).json({ message: 'Playlist ID is required' });
            }
            const playlist = await Playlist.findById(playlistId);
            const songs = await Song.find({ playlist: playlistId });
            res.status(200).json({ playlist, songs });
        } catch (error) {
            console.log(error);
        }
    }

    async updateSong(req: Request, res: Response) : Promise<void> {
        try {
            const songId = req.params.id;
            const { title, year, author, link } = req.body;
            if (!songId) {
                res.status(400).json({ message: 'Song ID is required' });
            }
            const song = await Song.findByIdAndUpdate(songId, { title, year, author, link });
            res.status(200).json(song);
        } catch (error) {
            console.log(error);
        }
    }


    async deleteSong(req: Request, res: Response) : Promise<void> {
        try {
            const songId = req.params.id;
            if (!songId) {
                res.status(400).json({ message: 'Song ID is required' });
            }
            await Song.findByIdAndDelete(songId);
            res.status(200).json({ message: 'Song deleted' });
        } catch (error) {
            console.log(error);
        }
    }

    async updatePlaylist(req: Request, res: Response) : Promise<void> {
        try {
            const playlistId = req.params.id;
            const { author, name, songs, image } = req.body;
            if (!playlistId) {
                res.status(400).json({ message: 'Playlist ID is required' });
            }
            const playlist = await Playlist.findByIdAndUpdate(playlistId, { author, name, songs, image });
            res.status(200).json(playlist);
        } catch (error) {
            console.log(error);
        }
    }

    async deletePlaylist(req: Request, res: Response) : Promise<void> {
        try {
            const playlistId = req.params.id;
            if (!playlistId) {
                res.status(400).json({ message: 'Playlist ID is required' });
            }
            await Playlist.findByIdAndDelete(playlistId);   
            res.status(200).json({ message: 'Playlist deleted' });
        } catch (error) {   
            console.log(error);
        }
    }

    async addSongToPlaylist(req: Request, res: Response) : Promise<void> {
        try {
            const playlistId = req.params.id;
            const { title, year, author, link } = req.body;
            if (!playlistId) {
                res.status(400).json({ message: 'Playlist ID is required' });
            }
            const playlist = await Playlist.findById(playlistId);
            if (!playlist) {
                res.status(404).json({ message: 'Playlist not found' });
            }
            const song = { title, year, author, link, playlist: playlistId };
            await Song.create(song);
            res.status(200).json(playlist);
        } catch (error) {
            console.log(error);
        }
    }

    async getPlaylistByAuthor(req: Request, res: Response) : Promise<void> {
        try {
            const author = req.params.author;
            if (!author) {
                res.status(400).json({ message: 'Author is required' });
            }
            const playlists = await Playlist.find({ author });
            res.status(200).json(playlists);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new PlaylistController;
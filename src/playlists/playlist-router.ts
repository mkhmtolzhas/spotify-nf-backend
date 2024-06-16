import Router from 'express';
import PlaylistController from './playlist-controller';

const playlistRouter = Router();

playlistRouter.post('/playlists', PlaylistController.createPlaylist);

playlistRouter.post("/playlists/:id/songs", PlaylistController.addSongToPlaylist);

playlistRouter.put("/playlists/:id/songs/:songId", PlaylistController.updateSong);

playlistRouter.delete("/playlists/:id/songs/:songId", PlaylistController.deleteSong);

playlistRouter.get('/playlists', PlaylistController.getPlaylists);

playlistRouter.get('/playlists/:id', PlaylistController.getPlaylist)

playlistRouter.put('/playlists/:id', PlaylistController.updatePlaylist) 

playlistRouter.delete('/playlists/:id', PlaylistController.deletePlaylist)


export default playlistRouter;
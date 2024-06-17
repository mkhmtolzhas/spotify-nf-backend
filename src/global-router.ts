import { Router } from 'express';
import authRouter from './auth/auth-router';
import playlistRouter from './playlists/playlist-router';
import artistRouter from './artist/artist-router';
// other routers can be imported here

const globalRouter = Router();

globalRouter.use(playlistRouter);
globalRouter.use(authRouter);
globalRouter.use(artistRouter);



// other routers can be added here

export default globalRouter;

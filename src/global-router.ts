import { Router } from 'express';
import authRouter from './auth/auth-router';
import playlistRouter from './playlists/playlist-router';
// other routers can be imported here

const globalRouter = Router();

globalRouter.use(playlistRouter);
globalRouter.use(authRouter);



// other routers can be added here

export default globalRouter;

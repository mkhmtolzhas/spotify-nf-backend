import { Router } from "express";
import artistController from "./artist-controller";

const artistRouter = Router();



artistRouter.get("/artists", artistController.getArtists);

artistRouter.get("/artists/:name", artistController.getArtistByName);

artistRouter.post("/artists", artistController.createArtist);

artistRouter.put("/artists/:id", artistController.updateArtist);

artistRouter.delete("/artists/:id", artistController.deleteArtist);


export default artistRouter;
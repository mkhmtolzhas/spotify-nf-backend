import Artist from "./models/Artist";

class ArtistService {
    async getArtistByName(artistName: string) {
        return await Artist.findOne({
            name: artistName
        });
    }

    async createArtist(name: string, image: string, description: string) {
        return await Artist.create({
            name,
            image,
            description
        });
    }
}


export default new ArtistService;
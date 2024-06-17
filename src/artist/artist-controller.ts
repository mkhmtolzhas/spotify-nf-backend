import Artist from "./models/Artist";
import artistService from "./artist-service";

class ArtistController {
  async createArtist(req, res) {
    try {
      const {
        name,
        image,
        description
      } = req.body;
      const artist = await Artist.create({
        name,
        image,
        description
      });
      res.status(201).json(artist);
    } catch (error) {
      console.log(error);
    }
  }

  async getArtists(req, res) {
    try {
      const artists = await Artist.find();
      res.status(200).json(artists);
    } catch (error) {
      console.log(error);
    }
  }

  async getArtistByName(req, res) {
    try {
      const artistName = req.params.name;
      if (!artistName) {
        res.status(400).json({
          message: 'Artist name is required'
        });
      }

      const artist = await Artist.findOne({
        name: artistName
      });
      res.status(200).json(artist);
    } catch (error) {
      console.log(error);
    }
  }

    async updateArtist(req, res) {
        try {
        const artistId = req.params.id;
        const {
            name,
            image,
            description
        } = req.body;
        if (!artistId) {
            res.status(400).json({
            message: 'Artist ID is required'
            });
        }
    
        const artist = await Artist.findByIdAndUpdate(artistId, {
            name,
            image,
            description
        });
        res.status(200).json(artist);
        } catch (error) {
        console.log(error);
        }
    }

    async deleteArtist(req, res) {
        try {
        const artistId = req.params.id;
        if (!artistId) {
            res.status(400).json({
            message: 'Artist ID is required'
            });
        }
    
        await Artist.findByIdAndDelete(artistId);
        res.status(200).json({
            message: 'Artist deleted'
        });
        } catch (error) {
        console.log(error);
        }
    }
}


export default new ArtistController();
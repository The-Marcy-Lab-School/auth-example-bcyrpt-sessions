const PostedImages = require("../../db/models/posted-images");

const createImg = async (req, res) => {
    const {
      session,
      db: { PostedImages },
      body: { url, id },
    } = req;
  
    const img = await PostedImages.create(url, id);
    session.userId = user.id;
  
    res.send(img);
  };
  
  module.exports = createImg;
  
const PostedImages = require("../../db/models/posted-images");

const createImg = async (req, res) => {
    const {
      //session,
      db: { PostedImages },
      body: { url },
    } = req;
  
    const img = await PostedImages.create(username, password);
    //session.userId = img.url;
  
    res.send(img);
  };
  
  module.exports = createImg;
  
const User = require('../db/models/user');
const PostedImages = require('../db/models/posted-images');


const addModels = (req, res, next) => {
  req.db = {
    User,
    PostedImages
  };
  next();
};

module.exports = addModels;

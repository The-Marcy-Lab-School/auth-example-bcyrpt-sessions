const express = require('express');
const userController = require('./controllers/user');
const postedimages = require('./controllers/posted-images');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');
const PostedImages = require('./db/models/posted-images');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);

//test my new route
Router.post('/posted-images', postedimages.create);//This handles incoming request from my page
Router.get('/h', postedimages.list);//
Router.delete('/:id', postedimages.destroy);



// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);
// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
//   res.send("hi");
// });

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);

// Delete
Router.delete('/users/logout', userController.logout);

//Router.delete('/posted-images/:id', postedimages.delete)


/*Router.get('/posted-images/:id', async (req, res) => {
  const { id } = req.params;

  // Call the deleteImage method from the model to delete the image
  const deletedImage = await PostedImages.delete(id);

  // Send a response back to the client
  if (deletedImage) {
    res.send(`Image with ID ${id} has been deleted`);
  } else {
    res.status(404).send(`Image with ID ${id} not found`);
  }
});

*/

// const wrk = async(req, res) => {
// //  const {
// //   db: {PostedImages}
// //   body{}
// //  }
//   const plz = await PostedImages.list()
//   console.log(plz)
//   res.send(plz)
// }
// Router.get('/y', (req, res) => {
//   const data = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer'
//   };
//   res.send(data);
// })


module.exports = Router;

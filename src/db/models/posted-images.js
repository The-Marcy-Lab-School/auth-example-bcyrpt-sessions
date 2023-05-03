// const knex = require('../knex');
// const authUtils = require('../../utils/auth-utils');

// class PostedImages {
//   #passwordHash = null;

  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
//   constructor({ id, username, password_hash }) {
//     this.id = id;
//     this.username = username;
//     this.#passwordHash = password_hash;
//   }

//   static async list() {
//     try {
//       const query = 'SELECT * FROM users';
//       const { rows } = await knex.raw(query);
//       return rows.map((user) => new User(user));
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }

//   static async find(id) {
//     try {
//       const query = 'SELECT * FROM users WHERE id = ?';
//       const { rows: [user] } = await knex.raw(query, [id]);
//       return user ? new User(user) : null;
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }

//   static async findByUsername(username) {
//     try {
//       const query = 'SELECT * FROM users WHERE username = ?';
//       const { rows: [user] } = await knex.raw(query, [username]);
//       return user ? new User(user) : null;
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }

//   static async create(username, password) {
//     try {
//       const passwordHash = await authUtils.hashPassword(password);
//       console.log(passwordHash)
//       const query = `INSERT INTO users (username, password_hash)
//         VALUES (?, ?) RETURNING *`;
//       const { rows: [user] } = await knex.raw(query, [username, passwordHash]);
//       return new User(user);
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }

//   static async deleteAll() {
//     try {
//       return knex.raw('TRUNCATE users;');
//     } catch (err) {
//       console.error(err);
//       return null;
//     }
//   }
//}

// module.exports = User;

//testing express
// const app = require('express')
// const app = express()
// console.log(app)
// app.get('/create.html',async(req,res) => {
//   console.log(req)
// })

// require('dotenv').config();
// const path = require('path');
// const server = require('express');
// //const app = require('../..server/app');
// const app = server()
//  //console.log(app)
// // console.log(server)

// const port = process.env.PORT || 3000;
// const host = process.env.HOST || '127.0.0.1';
// server.listen(port, host, () => {
//   console.log(`yo running at http://${host}:${port}/`);
// });

// app.get('/api/me', (req, res) => {
//   console.log("1"); // Send back plain text
// });

// app.get('/create.html', (req, res) => {
//   console.log("2"); // Send back HTML
// })

// app.get('/health', (req, res) => {
//   // res.send({ status: 'OK', name: 'Ben' }); // Send back JSON
//   console.log("3");
// });


//FETCHING 
//const url = 'http://127.0.0.1:3000/api/me/create.html'
// fetch('http://127.0.0.1:3000/api/me').
// .then(response => {
//   response.json()
// })

// .then(data => {
//   res.send({ status: 'OK', name: 'Ben' })
// })

// const ex = require('express')
// const a = ex()

// const express = require('../../sexpress');
// const app = express();
// const port = process.env.PORT || 3000;
// const host = process.env.HOST || '127.0.0.1';
// const ap = require('../../server')
// console.log(ap)
// Define routes and middleware
// app.get('/', (req, res) => {
//   res.send('Hi'); // Send back plain text
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>') // Send back HTML
// })

// app.get('/health', (req, res) => {
//   res.send({ status: 'OK', name: 'Ben' }); // Send back JSON
// });

// // Start the server
// app.listen(port, host, () => {
//   console.log(`Server is now running on http://${host}:${port}`);
// });
// app.get('/api/me/create.html', (req, res) => {
//   //console.log("1"); // Send back plain text
// res.send('fd')
// });


const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');

class PostedImages {
  #passwordHash = null;

  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
  constructor({url,id}) {
    this.url = url;
    this.id = id;
  }

  static async create(url,id) {
    try {
      // const passwordHash = await authUtils.hashPassword(password);

      const query = `INSERT INTO posted_images (img_URL,user_id)
        VALUES (?) RETURNING *`;
      const { rows: [img] } = await knex.raw(query, [url,id]);
      return new PostedImages(img);
    } catch (err) {
      console.error(err);
      return null;
    }
  }


  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  );
}

module.exports = PostedImages;

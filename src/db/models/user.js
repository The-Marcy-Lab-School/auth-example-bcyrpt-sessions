const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');

// This class constructor is used by the model to make passwordHash
// a private property after fetching a user's data from the database. 
// When the static methods return the User instance to the controller,
// the User instance will not reveal the passwordHash. Those instances 
// will also have access to the instance methods isValidPassword and update.
class User {
  #passwordHash = null;
  
  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
  }

  static async find(id) {
    try {
      // The query to execute
      const query = 'SELECT * FROM users WHERE id = ?';
      
      // `knex.raw()` returns an object with a .rows array containing the results
      // Here, we extract the first value from the .rows array and call it `user`
      const { rows: [user] } = await knex.raw(query, [id]); 

      // If the `user` exists, return a new `User` instance to hide the passwordHash. If not, return `null`
      return user ? new User(user) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async findByUsername(username) {
    try {
      const query = 'SELECT * FROM users WHERE username = ?';
      const { rows: [user] } = await knex.raw(query, [username]);
      return user ? new User(user) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const query = 'SELECT * FROM users';
      const result = await knex.raw(query);
      return result.rows.map((user) => new User(user));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(username, password) {
    try {
      const passwordHash = await authUtils.hashPassword(password);

      const query = `INSERT INTO users (username, password_hash)
        VALUES (?, ?) RETURNING *`;
      const { rows: [user] } = await knex.raw(query, [username, passwordHash]);
      return new User(user);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex.raw('TRUNCATE users;');
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  update = async (username) => { // dynamic queries are easier if you add more properties
    try {
      const [updatedUser] = await knex('users')
        .where({ id: this.id })
        .update({ username })
        .returning('*');
      return updatedUser ? new User(updatedUser) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;

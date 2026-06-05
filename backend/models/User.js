// User Model
class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.connectedAt = new Date();
  }
}

module.exports = User;

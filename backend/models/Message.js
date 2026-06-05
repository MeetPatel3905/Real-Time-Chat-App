// Message Model
class Message {
  constructor(sender, content, timestamp = new Date()) {
    this.sender = sender;
    this.content = content;
    this.timestamp = timestamp;
  }
}

module.exports = Message;

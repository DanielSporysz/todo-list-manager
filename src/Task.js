export default class Task {
  constructor(message, id) {
    this.message = message;
    this.id = id;
    this.ready = false;
  }
}

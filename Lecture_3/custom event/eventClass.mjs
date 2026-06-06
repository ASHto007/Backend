import * as Events from "events";

// CustomEvent class extends the EventEmitter class from the events module
// to create a custom event system for managing event listeners and triggers
export class CustomEvent extends Events.EventEmitter {
  createPost(content) {
    this.emit("postCreated", content);
  }
}

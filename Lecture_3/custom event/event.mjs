import { CustomEvent } from "./eventClass.mjs";

// create a new CustomEvent instance to manage event listeners and triggers
const event = new CustomEvent();

// define the event listener functions that will respond to the "postCreated" event
function saveToDatabase(content) {
  console.log("Saving post to database:", content);
}

// define additional event listener functions to handle other actions when a post is created
function sendNotification(content) {
  console.log("Sending notification for post:", content);
}

// define another event listener function to update the timeline when a post is created
function updateTimeline(content) {
  console.log("Updating timeline with post:", content);
}

event.addListener("postCreated", saveToDatabase);
event.addListener("postCreated", sendNotification);
event.addListener("postCreated", updateTimeline);

event.createPost("This is my first post");

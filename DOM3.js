import { EventEmitter } from "events";
const button = new EventEmitter();
button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});
button.emit("click", "Aditya Vikram Singh");
button.emit("click", "Pandit Ji");
button.emit("click", "Panwar Ji");
button.emit("click");
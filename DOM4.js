import { EventEmitter } from "events";
const form = new EventEmitter();
form.on("submit", (uname,password) => {
    console.log("form submitted");
    console.log(`Username: ${uname}`);
    console.log(`Password: ${password}`);
});
form.emit("submit","abc@xyz.com","1234567");
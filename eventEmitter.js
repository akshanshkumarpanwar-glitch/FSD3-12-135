import{EventEmitter} from "node:events";
const login=(name) => {
    console.log(`${name} logged in`);
};
const start = () => {
    console.log("System starts");
};
const working=(name) => {
    console.log(`${name} add items to cart`);
};
const checkout = (name) => {
    console.log(`${name} logged out`);
};
const task= new EventEmitter();
task.once("greet", start);
task.on ("greet", login);
task.on ("greet", working);
task.on ("greet", checkout);

task.emit("greet", "Aaryan");
task.emit ("greet", "verma");
task.off("greet", working);
task.emit("exit", "Manager");
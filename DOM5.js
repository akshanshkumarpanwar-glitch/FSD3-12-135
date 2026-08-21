import{ EventEmitter } from "events";
class DomClass extends EventEmitter {
    addEventLister(eventName, callback) {
        this.on(eventName, callback);
    }
    removeEventLister(eventName, callback) {
        this.off(eventName, callback);
    }
    dispatchEvent(eventName, eventData={}) {
        const event
    }
}
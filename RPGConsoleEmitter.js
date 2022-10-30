const EventEmitter = require('events');

let update_time = 0;
class RPGConsoleEmitter extends EventEmitter {
    constructor(update_time = 60) {
        super();
        this.update_time = update_time;
    }

    start() {
        this.emit('refresh');
        this.sleep();
    }
    
    sleep() {
        setTimeout(() => this.start(), this.update_time);
    }
}
module.exports = RPGConsoleEmitter;
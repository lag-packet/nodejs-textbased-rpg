const RPGConsoleEmitter = require("./RPGConsoleEmitter.js");

const rpgconsole_emitter = new RPGConsoleEmitter();

/*
let i = 0;
let j = 2;
rpgconsole_emitter.on("refresh", function() {
    process.stdout.cursorTo(10,0);
    process.stdout.clearLine();
    process.stdout.write("wassgoodie " + rpgconsole_emitter.update_time);
    process.stderr.cursorTo(0,1);
    process.stdout.write(i.toString());
    if (i == 60) {
        process.stdout.cursorTo(0,j);
        process.stdout.write("its 60");
        i =0;
        j++;
    }
    i++;
});
console.clear();
rpgconsole_emitter.start();
*/

// callbacks
function fn() {
    console.log("just a function");
}

function highFunction(callback) {
    callback();
}

highFunction(fn()); //test
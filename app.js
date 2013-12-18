var EventEmitter = require("events").EventEmitter;
var util = require("util");

function fred(message){
	console.log("Fred gets the message: " + message);
}

var ee = new EventEmitter();
ee.setMaxListeners(20);
ee.once("someEvent", function () { console.log("event 1"); });
ee.on("someEvent", function () { console.log("event 2"); });
ee.once("someEvent", function () { console.log("event 3"); });
ee.on("someEvent", function () { console.log("event 4"); });
ee.once("someEvent", function () { console.log("event 5"); });
ee.on("someEvent", function () { console.log("event 6"); });
ee.once("someEvent", function () { console.log("event 7"); });
ee.on("someEvent", function () { console.log("event 8"); });
ee.once("someEvent", function () { console.log("event 9"); });
ee.on("someEvent", function () { console.log("event 10"); });
ee.once("someEvent", function () { console.log("event 11"); });
ee.on("heyFred", fred);
ee.emit("heyFred", "It's " + new Date().toISOString());
 
ee.emit("someEvent");
ee.emit("someEvent");

ee.emit("heyFred", "It's " + new Date().toISOString());
ee.removeListener("heyFred", fred);
ee.emit("heyFred", "It's " + new Date().toISOString());

console.log(util.inspect(ee.listeners('someEvent')));
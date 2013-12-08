var EventEmitter = require("events").EventEmitter;

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
 
ee.emit("someEvent");
ee.emit("someEvent");

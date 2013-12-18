var EventEmitter = require("events").EventEmitter;
var util = require("util");

function fred(message){
	console.log("Fred gets the message: " + message);
}

var ee = new EventEmitter();
ee.setMaxListeners(20);

ee.on("heyFred", fred);

// steady... wait for it...
setTimeout(function(){ee.emit("heyFred", "Surprise - it's " + new Date().toISOString())}, 1);

// do heyFred right now
ee.emit("heyFred", "It's " + new Date().toISOString());

// now do the someEvent stuff
ee.once("someEvent", function (msg) { console.log("event 1: " + msg); });
ee.on("someEvent", function (msg) { console.log("event 2: " + msg); });
ee.once("someEvent", function (msg) { console.log("event 3: " + msg); });
ee.on("someEvent", function (msg) { console.log("event 4: " + msg); });
ee.once("someEvent", function (msg) { console.log("event 5: " + msg); });
ee.on("someEvent", function (msg) { console.log("event 6: " + msg); });
ee.once("someEvent", function (msg) { console.log("event 7: " + msg); });
ee.on("someEvent", function (msg) { console.log("event 8: " + msg); });
ee.once("someEvent", function (msg) { console.log("event 9: " + msg); });
ee.on("someEvent", function (msg) { console.log("event 10: " + msg); });
ee.once("someEvent", function (msg) { console.log("event 11: " + msg); });

// should trigger all registered listeners above 
ee.emit("someEvent", "first time");

// should trigger only the on() listeners, the once() listeners are released
ee.emit("someEvent", "second time");

// remove all remaining listeners
ee.listeners('someEvent').forEach(function(element, index, array){ee.removeListener('someEvent', element)});

// should should be no remaining listeners
ee.emit("someEvent", "third time");

// one more heyFred for luck
ee.emit("heyFred", "It's " + new Date().toISOString());

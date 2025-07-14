var bodyParser = require('body-parser');
var express = require('express');
const disableConsole = require('./disableConsole.js');
const v8 = require("v8")
var app = express();

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
const server = app.listen(5000);
server.keepAliveTimeout = 70000;
console.log("server start...")

//Object.freeze(console)
app.get("/test", (req, res) => {
    try {
        result = disableConsole.disableConsole()
//        global.console = undefined;
        res.send({ code: 0,'data':result})
    } catch (err) {
        res.json({ code: -2, 'err': err.message})
        console.error(err);
    }
});


app.get("/dump", (req, res) => {
    try {
        const fileName = v8.writeHeapSnapshot();
        console_log(`Heap snapshot written to: ${fileName}`);
        res.status(200).send(`Heap snapshot written to: ${fileName}`);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});






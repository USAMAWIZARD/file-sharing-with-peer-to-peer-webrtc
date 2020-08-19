
app = require("express");
server = app();


session = require("express-session")({
  secret: "my-secret",
  resave: true,
  saveUninitialized: true
});
server.use(session);                             //ses for managing users
sharedsession = require("express-socket.io-session");
var ser = server.listen(5000)
io = require('socket.io').listen(ser);
io.use(sharedsession(session));

require("ejs");
//Set View Engine To EJSs
server.set("view engine", "ejs");
//Set Static Directory
server.use(app.static(__dirname + '/views'));
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());
var socid
connectedclients={}


io.on("connection",function(socket){
randomid=Math.floor(Math.random() * (100000 - 10000)) + 10000
connectedclients[randomid]=socket.id
console.log(connectedclients)

socket.emit("myrandomid",randomid)
socket.on("disconnect",()=>{

delete connectedclients[Object.keys(connectedclients)[Object.values(connectedclients).indexOf(socket.id)]]
})
})


server.get('/',function(req,res){
    res.render("sharefiles")
})  
server.post("/connect",function(req,res){
  socket.to(req.body.hisid).emit("makeconnection",req.name.myid)
})



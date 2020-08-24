
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
socket.on("sendrequest",function(whometosend){
  socket.to(connectedclients[whometosend[1]]).emit("makeconnection",whometosend[0])
})
socket.on("accept",function(whoesrequest){
  socket.to(connectedclients[whoesrequest[0]]).emit("accepted",whoesrequest[1])
  //isinitiator
})
socket.on("reject",function(whoesrequest){
  socket.to(connectedclients[whoesrequest[0]]).emit("rejected",whoesrequest[1])
})
socket.on("peerid",function(pdatatowhom){
  console.log("dic",pdatatowhom["data"])
  socket.to(connectedclients[pdatatowhom["to"]]).emit("peerid",pdatatowhom["data"])
})
})


server.get('/',function(req,res){
    res.render("sharefiles")
})  




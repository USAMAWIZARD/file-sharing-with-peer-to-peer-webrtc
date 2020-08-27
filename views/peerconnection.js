peer = new SimplePeer({
  initiator: isinitiator,
  trickle: false,
});
peer.on("signal", function (data) {
  console.log(data);
  socket.emit("peerid", {
    data: data,
    to: document.getElementById("caller").innerHTML,
  });
});

function callpeertoconnect(pid) {
  peer.signal(pid);
  console.log("peer hua");
}

peer.on("connect", () => {
  console.log("CONNECT");
  document.getElementById("connected").innerHTML="you are connected"
});

sendingfilename = true;
var filerecived = [];
var fileblob;

peer.on("data", (data) => {
  if (sendingfilename) {
    filename = data.toString();
    sendingfilename = false;
    return
  }
  if (!sendingfilename) {
    if (data.toString() === "done") {
      fileblob = new Blob(filerecived);
      download(fileblob, filename);
      sendingfilename = true;
      filerecived = [];
    } else {
      filerecived.push(data);
      console.log(data);
      //   console.log("andar aaya")
    }
  }
});

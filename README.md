# file-sharing-with-peer-to-peer-webrtc
This web application  share file between browsers using peer to peer WebRTC as a channel for communication.

# Motivation
Many a times we have to share file between devices but you have to download cetain application on the the devices for sharing the files.
but every divice have browser buildin so why not share the files browser to browser.This project connects the devices peer to peer to share the data between devices.


## Screenshots

![image](https://user-images.githubusercontent.com/47350008/114985665-eb26fe80-9e47-11eb-87b5-f144d7874b1e.png)


## Tech/framework used

**Built with**
<ul>
  <li>Node JS</li>
  <li>Express JS</li>
</ul>


## Features
You can share data between devices  without the need of any specific application.

## How does it Works
Both the clients who want to communicate are given an id (five digit number) ethier of them can type that number into the divice they want to connect to.after entering the the divice id into ohter device and clicking connect button an SDP (Session Discripting Protcol) will be genrated SDP contaians all the information of the ICE  Candidates (Internet Connectivity Establishment) avalialable to him.This SDP will be shared with the other client using socket connection the other client will accept the SDP and genrate his SDP informaiton and share it back to the sender.
and then both will be connected with a peer to peer connection without any intervention of the server.they can select files and click send to send those file to other client those files will be devided into chunks and the small buffers will be sent to other end after all the chunks are recived browser will downlod the file into system.



## How to use?
**sending the connect request** <br>
every user is provided with the id one can enter that id into other devices to whcih he/she wish to connect with.after entering the id and clicking the connect button a connect request will be sent to that user whoes id was entered in the input box.<br>
**accepting the connecting request on the other device** <br>
Other user can accept the request or reject the request of the connection.after accepting user can select file from the select button and the table will be displayed with all the files that you have selected you can also remove or add more file in the table.<br>
after selecting the files you can click on the send button to initiate the the file transmission of the file to the other end.

## Credits

https://www.npmjs.com/package/simple-peer

Anything else that seems useful

## License

MIT © github.com/USAMA.WIZARD

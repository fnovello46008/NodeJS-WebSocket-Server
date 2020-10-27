const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {

    //Print out when client connects
    console.log("Client Connected");

    ws.on('message', function incoming(data) {

    //Print data from client
    console.log(data);

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify("Hello From Server"));
      }
    });
  });
});
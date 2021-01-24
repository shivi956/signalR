var express = require('express');
var SignalRJS = require('signalrjs');
var signalR = SignalRJS();
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db, collection ;
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    db = client.db('Chats');
    collection = db.collection('savedChats');
    console.log('connected to DB!');
  if (err) {
    console.error(err)
    return;
  }
});

signalR.hub('chatHub',{
    send : function(userName,message){
        this.clients.all.invoke('broadcast').withArgs([userName,message])
        collection.insertOne({name: userName, msg: message, time: Date()}, (err, result) => {
            if (err) {
                console.error(err)
                return;
              }

        });
        console.log('username:'+userName);
        console.log('send:'+message);

    }
});
 
var server = express();
server.use(express.static(__dirname));
server.use(signalR.createListener())
server.listen(3000);
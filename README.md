# Chat Application

The basic functionality of the application is presented in the picture as follows. When a sender will type a message, it will be sent to the chat server which then will be broadcasted to all the receivers of the chat hub who are using the application.![alt text](/Untitled1.png)The view of the Chat Application first start with a promp where user has to enter his name and then the Chat application will be opened.After this user just has to enter the message and press send that message will be broadcasted and will be saved in the database.![alt text](/Untitled2.PNG)The below picture is the architecture of the application. It consists of a View (HTML), Controllers (JavaScript)in the frontend part. At the back end the request is served by  Node.js and the all the chats are stored in the Mongo Db(No SQL) .![alt text](/Untitled.png)Technologies used:
•	HTML 
•	CSS
•	Node.js
•	Signalr(npm package)
•	Mongo db

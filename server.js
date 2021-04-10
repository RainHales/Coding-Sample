const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://Rain:meme123@car-sample.i155q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DATABASE_NAME = "Cars";


var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

//create node server and connect to Mongodb 
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Cars");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

//Query database for information 
app.get("/cars", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        } 
        response.send(result);
    });
});
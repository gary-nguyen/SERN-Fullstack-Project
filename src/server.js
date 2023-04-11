import express from "express";
import bodyParser from "body-parser";   //a Library help to get parameters that client uses. 
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
require('dotenv').config(); //Call function config() in library dotenv in order to use the below command process.env. in framework .env
let app = express();  //an instance of app express.
 
//Config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;  //If port is undefined, take 6969.

app.listen(port, () => {   //If app listen sucessfully, run a callback.
    console.log("Backend NodeJS is running on the port: " + port);
});

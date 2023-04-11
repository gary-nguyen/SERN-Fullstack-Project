//Created a link, so when accessing to server client'll see Hello World.
//Mỗi khi truy cập một đường link trên trang web của ta thì nó sẽ chạy vào file này đầu tiên.
import express from "express";

//import res from "express/lib/response"; typo???

let router = express.Router();   //Cú pháp để dùng express.

let initWebRoutes = (app) => {  //A server ~ app, we pass app into the server.
    router.get("/", (req, res) => { 
       return res.send('Hello World'); 
    });
   return app.use("/", router)
}
module.exports = initWebRoutes;
//const express = require("express"); old syntax.

import express from "express";   //To import framework express (new syntax).
//var express = require("express"); this is old syntax so we don't use.

let configViewEngine = (app) => {   //Use an arrow function.
    app.use(express.static("./src/public"))  //Config static link to folder public, to specify where client can get public data from server.
    app.set("view engine", "ejs")   //So that nodejs knows the view engine being used is ejs that is our installed library (java:jsp, php:blade).
    //Thanks to this view engine, we can use logic (if else for...) in html files.
    app.set("view", "./src/views"); //Set link where we get view engine (inside folder view).
}   
module.exports = configViewEngine;  //Let other JS files use this function.
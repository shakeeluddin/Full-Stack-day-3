const express = require('express');
const app = express();

const cors = require ('cors');
app.use(cors());
const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const{gymModel}=require("./db");

const server=app.listen(1031,()=>{
    console.log(`server has started ${server.address().port}`)
})

module.exports=server;

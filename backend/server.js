const express = require('express');
const app = express();
const db = require("./models");
const port = process.env.PORT || 3200;
const cors =require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRoute = require('./apiRoutes/api');
app.use("/api",apiRoute);

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on http://localhost:${port}`);
    })
})
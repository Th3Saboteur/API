const express = require('express');
const routes = express.Router();
var date = new Date();

routes.get('/json/:x/:y', (req, res)=>{
    const data = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    //console.log(data);
    const {x, y} = req.params;
    res.json({x, y, data});
})

module.exports = routes;
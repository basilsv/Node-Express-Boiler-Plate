var express = require('express');

const api_User_Route = express.Router();

api_User_Route.route('/users').get((request,response)=>{
    response.json({"users":["user_One","user_Two","user_Three"]})
})

api_User_Route.post('/users', function(req, res) {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });

module.exports = api_User_Route;
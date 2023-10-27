const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api",(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.post('/api/users', function(req, res) {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
    
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });
   
var api_User_Route  = require('./src/routes/api-user-routes');  

app.use('/apii',api_User_Route)
app.listen(5000,()=>{console.log("Server started on port 5000")})
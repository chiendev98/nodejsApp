const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.post('/login', (req, res) => {
    const body  = req.body;
    console.log("body",body)
   if(body){
      if(body.username === "chien" && body.password === "12345"){
        res.status(200).send({
          message:"LOGIN_SUCCESS",
          error: false,
          data:{
            token:"123"
        
          }
          
        })
      }
      else{
        res.status(400).send({
          message:"LOGIN_FAIL",
          error: true,
          data:null
        })
      }
   }
   else{
    res.status(400).send({
      message:"LOGIN_FAIL",
      error: true,
      data:null
    })
   }
 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
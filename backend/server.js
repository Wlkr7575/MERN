const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const DbConn = require('./database/connect')
const postRoutes = require('./routes/post.js')
const userRoutes = require('./routes/user.js')
const app =  express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

DbConn();
app.use('/post',postRoutes)
app.use('/user',userRoutes)
app.use('/',async(res,req)=>{
    req.send('Hellow')
})

app.listen(3001,()=>{
    console.log("Listening port 3001...")
})
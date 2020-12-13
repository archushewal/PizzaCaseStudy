const express=require('express')
const bodyParser=require('body-parser')

const routeUser=require('./routes/User')
const routeAdmin=require('./routes/Admin')
const routeCustomer=require('./routes/Customer')
const app=express()


app.use(bodyParser.json())
app.use(routeUser)
app.use('/admin',routeAdmin)
app.use('/customer',routeCustomer)
app.listen(4400,'0.0.0.0',()=>{
    console.log('Server started')
})
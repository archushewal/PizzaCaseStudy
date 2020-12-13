const express=require('express')
const db=require('../db')
const utils = require('../utils')

const router=express.Router()

 router.post('/user/signin',(request,response)=>{
    const{email,password}=request.body

    // console.log(`email='${email}'`)
    // console.log(password)
   // const statement=`select * from Pizza_User where email="admin@sunbeaminfo.com" and password="admin"`;

   const statement=`select * from Pizza_User where email='${email}' and password='${password}'`;
    db.connection.query(statement,(error,users)=>{
        const result = {}

        if (error) {
          result['status'] = 'error'
          result['error'] = error
        } else {
          if (users.length == 0) {
            result['status'] = 'error'
            result['error'] = 'invalid credentials'
          } else {
            const user = users[0]
            result['status'] = 'success'
            result['data'] = user
          }
        }
        response.send(result)
    })
})



router.get('/user',(request,response)=>{
    const statement=`select * from Pizza_User`
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
})

module.exports=router
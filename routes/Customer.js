
const express = require('express')
const crypto=require('crypto-js')
const db = require('../db')
const utils = require('../utils')

const router=express.Router()

router.post('/signup', (request, response) => {
    const {name,password,mobile,address,email,role} = request.body
    const encryptedPassword=crypto.SHA256(password)
    const statement = `insert into Pizza_User (name,password,mobile, address,email,role) values (
      '${name}', '${encryptedPassword}', '${mobile}', '${address}', '${email}', '${role}')`
    
   db.connection.query(statement,(error,data)=>{
       response.send(utils.createResult(error,data))
   })
  })

  router.get('/displaybytype/:type',(request,response)=>{
    const type=request.params.type
    const statement=`select * from PIZZA_ITEMS where type='${type}'`
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
  })

  router.get('/displaybyid/:id',(request,response)=>{
    const id=request.params.id
    const statement=`select * from PIZZA_ITEMS where id=${id}`
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
  })

  router.get('/displaybycategory/:category',(request,response)=>{
    const category=request.params.category
    const statement=`select * from PIZZA_ITEMS where category='${category}'`
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
  })

  module.exports = router
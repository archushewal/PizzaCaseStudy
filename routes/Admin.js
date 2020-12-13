const express=require('express')
const db=require('../db')
const utils = require('../utils')
const router=express.Router()


router.get('/',(request,response)=>{
    const statement=`select * from PIZZA_ITEMS`
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response)=>{
    const {name,type,category,description,price}=request.body
    
    const statement=`insert into PIZZA_ITEMS (name,type,category,description,price) values ('${name}','${type}','${category}','${description}',${price})`;
    
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
})

router.put('/:id',(request,response)=>{
    const {name,type,category,description,price}=request.body
    const id=request.params.id
    const statement=`update PIZZA_ITEMS set name='${name}',price=${price} where id=${id}`
   
    db.connection.query(statement,(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
})


router.delete('/:id',(request,response)=>{
    const id=request.params.id

    const statement=`delete from PIZZA_ITEMS where id=${id}`
    db.connection.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})

module.exports=router
import express from 'express'
import userModel from '../models/schema.js'


const router=express.Router()

//GET


//POST
router.post('/form', async(req,res)=>{
    try {
        const respond=req.body
        // console.log(res);
        const data= await userModel.create(req.body)
        // console.log("data",data);
        if(data){
            res.status(201).send({
                message:"Successfully Stored Your Details",
                success: true,
                Data: data
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internel server error",
            success: false,
        })
    }
})

export default router
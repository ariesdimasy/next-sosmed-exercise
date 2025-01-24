"use client"

import axios from "axios"
import Cookies from "js-cookie"

interface IProductDto { 
    name:string
    slug:string
    price:number
    stock:number
    description:string
}

export async function createProduct(data:IProductDto){
    try{
        let newToken = ""
        if(Cookies.get("token")){
            newToken = "Bearer "+Cookies.get("token")
        }
        const res = await axios.post(process.env.BASE_URL+`/api/products`,data,{
            headers:{
                Authorization:newToken
            }
        })
    } catch(err){
        console.log(err)
    }
   
}   
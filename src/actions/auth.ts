"use client"

import Cookie from "js-cookie"
import axios from "axios"

const base_url = "http://localhost:5678"

export async function loginProcess(data:{ email:string, password:string}){
    const { email, password } = data

    const response = await axios.post(`${base_url}/api/auth/login`,{
        email,
        password
    })

    if(response.status == 200){
        Cookie.set("token",response.data.data.token)
        alert("login success")
    } else {
        alert(response.data.data.message)
    }
}

export async function registerProcess(data:{ name:string, email:string, password:string}){
    
    const { name, email, password } = data
    
    return await axios.post(`${base_url}/api/auth/register`,{
        name,
        email,
        password
    })
}
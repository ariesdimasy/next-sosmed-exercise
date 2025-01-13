"use client"

import axios from "axios"

const base_url = "http://localhost:5678"

export function loginProcess(){

}

export async function registerProcess(data:{ name:string, email:string, password:string}){
    
    const { name, email, password } = data
    
    return await axios.post(`${base_url}/api/auth/register`,{
        name,
        email,
        password
    })
}
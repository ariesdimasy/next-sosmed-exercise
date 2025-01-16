"use client"

import Cookies from "js-cookie"
import axios from "axios"

const base_url = "http://localhost:5678"


export function getUserDetail(){
    return axios.get("/")
}

export async function updateUserProfile(data:FormData){
    let newToken = ""
    if(Cookies.get("token")){
        newToken = "Bearer "+Cookies.get("token")
    }

    return await axios.put(base_url+"/api/users/5",data,{
        headers:{
            Authorization:newToken
        }
    })
}

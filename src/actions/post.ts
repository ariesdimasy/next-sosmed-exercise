"use client"

import axios from "axios"
import Cookies from "js-cookie"

const base_url = "http://localhost:5678"

export async function postListProcess(){

    let newToken = ""
    if(Cookies.get("token")){
        newToken = "Bearer "+Cookies.get("token")
    }

    return await axios.get(base_url+"/api/posts",{
        headers:{
            Authorization:newToken
        }
    })
}

export function createPostProcess(){

}
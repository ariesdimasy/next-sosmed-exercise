"use client"

import axios from "axios"
import Cookies from "js-cookie"

const base_url = "http://localhost:5678"

export async function postListProcess(){
    try {
        let newToken = ""
        if(Cookies.get("token")){
            newToken = "Bearer "+Cookies.get("token")
        }
    
        return await axios.get(base_url+"/api/posts",{
            headers:{
                Authorization:newToken
            }
        })
    } catch(err:any) {
        alert(JSON.stringify(err))
    }
}

export async function createPostProcess(data:{
    content:string
}){
    try {

        let newToken = ""
        if(Cookies.get("token")){
            newToken = "Bearer "+Cookies.get("token")
        }

        return await axios.post(base_url+"/api/posts",{
            content:data.content,
        },{
            headers:{
                Authorization:newToken
            }
        })


    } catch(err:any){

    }
}
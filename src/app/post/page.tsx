"use client"

import { useState, useEffect } from "react"
import { postListProcess } from "@/actions/post"

export default function Post(){

    const [posts, setPosts] = useState([])
    
    const getPostList = async () => {
        const response = await postListProcess()
        if(response.status == 200){
            setPosts(response.data.data)
        }
    }

    useEffect(() => {
        getPostList()
    },[])

    return (<div>
        <ul>
            {posts.map((item:any, index) => (<li key={index}>
                {item.content}
            </li>))}
        </ul>
    </div>)
}
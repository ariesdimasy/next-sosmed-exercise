"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { postListProcess, createPostProcess } from "@/actions/post"
import { Button, Stack, Textarea, Input } from "@chakra-ui/react"
import Cookie from "js-cookie"

export default function PostList(props:any){

    const [content, setContent] = useState("")
    const [posts, setPosts] = useState([])
    const [imageFile, setImageFile] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const userAuth = JSON.parse(Cookie.get('user') || '{}')
    
    const getPostList = async () => {
        const response = await postListProcess()
        if(response?.status == 200){
            setPosts(response?.data?.data)
        }
    }

    const createPost = async () => {
        await createPostProcess({ content:content })
        getPostList()
        setContent("")
        setImageFile('')
        setImageUrl('')
    } 

    useEffect(() => {
      
        getPostList()
    },[])

    return (
    <div style={{ 
            margin:"0 auto 0 auto", 
            width:320, padding:'5px', 
            borderRight:"1px solid grey", 
            borderLeft:"1px solid grey" }}>
        <div style={{ marginTop:'100px'}}><b>{userAuth?.name}</b></div>
        <Textarea onChange={(e) => {
            setContent(e.target.value)
            
        }} style={{ marginBottom:'5px' }} value={content} />
        {imageUrl && (<Image width={320} height={150} alt='upload' src={imageUrl} />)}
        <Input 
            type='file' 
            name='image'
            w='100%' 
            style={{ marginBottom:'5px' }}
            onChange={(e) => { 
                setImageFile(e?.target?.files[0])
                if (e.target?.files && e.target?.files[0]) {
                    setImageUrl(URL.createObjectURL(e.target?.files[0]));
                }
            }}
        />
        <Button bgColor='blue.500' color='white' w='100%' onClick={() => createPost()} > Post </Button>
        <Stack gap="4" direction="row" wrap="wrap" style={{ marginTop:'10px'}}>
            {posts.map((item:any, index) => (
                <div key={index} 
                    style={{ 
                            border:"1px solid grey", 
                            width:"100%", 
                            padding:"5px",
                            margin:"0px",
                            borderRadius:'5px'
                    }}
                >
                  <div><b>{item?.user?.name}</b></div>
                  {item?.image && (<img width={'100%'} alt={item?.content} src={process.env.BASE_URL+'images/post/'+item?.image} />)}
                  <div>{item?.content}</div>
                  <div>&nbsp;</div>
                  <div> <a 
                    href='#' 
                    style={{ 
                        textDecoration:'underline', fontSize:10, color:'red'
                    }}
                  
                  >delete</a> </div>
                </div>
            ))}
        </Stack>
    </div>)
}
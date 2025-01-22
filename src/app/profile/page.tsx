"use client"

import { useEffect, useState} from "react"
import { Button, Grid, Input, Container, Heading } from "@chakra-ui/react"
import Image from "next/image"
import { updateUserProfile, getUserDetail } from "./../../actions/user"

export default function Profile(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [imageObj, setImageObj] = useState<any>()

    const getDataProfile = async () => {
        const res = await getUserDetail() 

        const { name , email, image } = res?.data.data

        setName(name)
        setEmail(email)
        setImageUrl("http://localhost:5678/images/"+image)
    }

    const updateProfileProcess = async () => {
        

        const formData = new FormData()

        formData.append("name", name);
        formData.append("email",email);
        formData.append("file",imageObj)

        const res = await updateUserProfile(formData) 

        alert(JSON.stringify(res.data.message))
    }

    useEffect(() => {
        getDataProfile()
    },[])

    return (<Grid>
        <Container sx={{ marginTop:100 }}>
        <Heading as="h1"> Profile </Heading>
        <Grid sx={{ margin:"40px auto",}}>

            <img width={200} height={200} style={{ border:'1px solid grey'}} src={imageUrl} alt="profile picture" />
        </Grid>
        <Grid>
            <Grid sx={{ margin:"10px 0"}}>
                <label> Name </label>
                <Input type="text" name="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid sx={{ margin:"10px 0"}}>
                <label> Email </label>
                <Input type="email" name="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid sx={{ margin:"10px 0"}}>
                <label> Upload Image </label>
                <Input type="file" name="imageObj" onChange={(e) => setImageObj(e?.target?.files[0])} />
            </Grid>
            <Grid sx={{ margin:"10px 0"}}>
                <Button type="button" variant={'outline'} bgColor={'blue'} color={'white'}
                    onClick={() => updateProfileProcess()}
                >  Update Profile </Button>
            </Grid>
        </Grid> 
        </Container>
    </Grid>)
}
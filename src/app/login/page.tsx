"use client"
import { useState } from "react"
import { Button, Center, Container, Input } from "@chakra-ui/react"
import { loginProcess } from "@/actions/auth";
import { useRouter } from 'next/navigation'

export default function Login(){

    const router = useRouter()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const loginUserProcess = async () => {
        try {
            await loginProcess({
                email, password
            })

            router.push("/post")
        } catch(err){
            alert(JSON.stringify(err))
        }
    }

    return (<Center bg="bg.emphasized" h={"90vh"}>
        <Container>
            <div className="my-5">
                <label> Email </label>
                <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                ></Input>
            </div>
            <div className="my-5">
                <label> Password </label>
                <Input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Input>
            </div>
            <div  className="my-5">
                <Button onClick={() => loginUserProcess()}> Login </Button>
            </div>
           
        </Container>
      </Center>)
}
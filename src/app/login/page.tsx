"use client"
import { useState } from "react"
import { Button, Center, Container, Input } from "@chakra-ui/react"
import { loginProcess } from "@/actions/auth";

export default function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const loginUserProcess = async () => {
        await loginProcess({
            email, password
        })
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
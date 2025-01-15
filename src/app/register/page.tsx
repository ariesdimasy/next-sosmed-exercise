"use client"
import { useState } from "react"
import { Button, Center, Container, Input } from "@chakra-ui/react"
import { registerProcess } from "../../actions/auth"

export default function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUserProcess = () => {
        registerProcess({
            name, email, password
        })

        alert("success")
    }

    return (<Center bg="bg.emphasized" h={"90vh"}>
        <Container>
            <div className="my-5">
                <label> Name </label>
                <Input 
                    type="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                ></Input>
            </div>
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
                <Button onClick={registerUserProcess}> Register </Button>
            </div>
        </Container>
      </Center>)
}
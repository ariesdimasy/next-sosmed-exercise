'use client'
import { useRouter } from 'next/navigation'
import { Button } from "@chakra-ui/react"
import Cookies from "js-cookie"

export default function Test(){

    const router = useRouter()
    const userSession = Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : {}

    return (<div>
        <div>
            <div> Name : <span>{userSession?.name}</span></div>
            <div> Email : <span>{userSession?.email}</span></div>
            <div> Role : <span>{userSession?.role}</span></div>
        </div>
        <Button onClick={() => {
            router.push("/login")
        }} variant="solid" color={'white'} bgColor={'teal'}> Login </Button>
        <Button onClick={() => {
            Cookies.remove("user")
            router.refresh()
        }}>
            Logout
        </Button>
    </div>)
}
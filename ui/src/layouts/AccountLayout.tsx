import { useEffect } from "react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



export default function AccountLayout() {
    const user = useSelector(state => state.user)
    const nav = useNavigate()

    useEffect(() => {
        if (!user?.token) {
            toast.error("You are not logged in")
            nav("/auth/login")
        }
    },[user])

    return (
        <div>
            Welcome {user.user? user.user.name: "please login hhh"}
        </div>
    )
}

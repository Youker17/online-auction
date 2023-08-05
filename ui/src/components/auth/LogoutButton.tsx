import { Button } from "@nextui-org/react"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slices/userSlice"






export default function LogoutButton(){
    const dispatch = useDispatch()

    return(
        <Button onClick={() => dispatch(logout())} color="danger" className="w-full">logout</Button>
    )
}
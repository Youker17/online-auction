import { Input, Button, Divider, Link, LinkIcon, Image } from "@nextui-org/react";
// import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'
import { useLoginMutation } from "../../redux/api/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginLocal, logout } from '../../redux/slices/userSlice'


export default function LoginForm() {
    const { register, handleSubmit } = useForm();
    const nav = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading, isError }] = useLoginMutation()

    const submit = (data: { email: string; password: string }) => {
        type result = {
            data?: {
                user?: object;
                token?: string;
            }
            error?: object;
        }
        let res: result;
        login(data).then((r) => {
            res = r
            console.log(res)
            // localStorage.setItem("test", "test");
            dispatch(loginLocal(res.data))
            toast.success("Login Successfull");
            nav("/account");
            console.log("naviagte")
        })
            .catch((e) => {
                toast.error("Incorrect Email or Password");
            });



        // toast.loading("Loading");
    }





    return (
        // @ts-ignore
        <form onSubmit={handleSubmit(e => submit(e))} className="w-full sm:w-[400px] mx-auto bg-white shadow-2xl shadow-gray-400 bg-opacity-70 backdrop-blur-3xl border-2 p-4 rounded-2xl flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-bold">Logo</h1>
            <label className="w-full text-left">Email</label>
            <Input type="email" {...register("email")} isRequired validationState={isError ? "invalid" : "valid"} label={"Email"} />
            <label className="w-full text-left">Password</label>
            <Input type="password" {...register("password")} isRequired validationState={isError ? "invalid" : "valid"} label={"Password"} />
            <Button type="submit" className="w-full bg-gradient-to-br font-bold text-white from-green-700 to-green-600" isLoading={isLoading} >Login</Button>
            <p className="w-full text-left">dont have an account ?<Link color="primary" href="/auth/signup" showAnchorIcon>Sign Up</Link> </p>
            <div className="w-full flex flex-row items-center gap-2 justify-center">
                <Divider className="w-[45%]" />
                or
                <Divider className="w-[45%]" />
                {/* <Divider /> */}
            </div>
            <Button type="submit" className="bg-gray-300 w-full" startContent={<Image src={google} className="w-5" />} >  Google</Button>
            <Button type="submit" className="w-full bg-blue-300" startContent={<Image src={facebook} className="w-5" />}>  Facebook</Button>
        </form>
    );
}
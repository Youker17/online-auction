import { Button, Divider, Image, Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { FilePond } from "react-filepond"
import { useForm } from "react-hook-form"
import { Link } from "@nextui-org/react"
import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'
import { useRegisterMutation } from "../../redux/api/api"
import { toast } from "react-hot-toast"



export default function SignupForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [profilePicture, setProfilePicture] = useState([])

    const [confirmationTouched, setConfirmationTouched] = useState(false)

    // @ts-ignore
    const [postRegister, { isLoading, isError }] = useRegisterMutation();

    const submit = (data: any) => {
        console.log(profilePicture)
        if (profilePicture.length < 1) {
            toast.error("Please upload a profile picture")
            return;

        }

        if (data.password !== data.password_confirmation) {
            toast.error("Password and Confirm Password do not match")
            return;
        }
        // @ts-ignore
        data.photo = profilePicture[0].file
        console.log(data)
        // postRegister(data).then((r) => {
        //     console.log(r)
        // })

    }


    useEffect(() => {
        if (errors) {
            for (const er of Object.keys(errors)) {
                toast.error("Please fill " + er + " field")
            }
        }
        console.log(errors)
        console.log(profilePicture.length, "profilePicture")
    }, [errors, PictureInPictureEvent])

    return (
        <div className="w-full m-3 lg:m-0 lg:max-w-[50%] mt-[40vh]  lg:mt-0 bg-white rounded-xl p-5 shadow-2xl border-2 shadow-gray-300">
            <h1 className="text-center font-extrabold text-2xl text-green-800 mb-10 lg:mb-3">Logo</h1>
            <form className="flex flex-row lg:flex-nowrap flex-wrap gap-4" onSubmit={handleSubmit(submit)}>
                <div className=" flex-row mx-auto w-40 h-40 justify-center lg:w-1/4">
                    {/* @ts-ignore */}
                    <FilePond name="photo" acceptedFileTypes={["image"]} files={profilePicture} allowImagePreview imageCropAspectRatio="1:1" allowFileTypeValidation acceptedFileTypes={["image/*"]} maxFileSize={"5mb"} onerror={()=>{setProfilePicture([]);toast.error("file invalid")}} onupdatefiles={setProfilePicture} maxFiles={1} allowBrowse allowDrop stylePanelLayout={"circle"}  labelIdle='Drag & Drop or <span class="filepond--label-action">Browse</span>' />
                    {/* <label htmlFor="photo"> Profile Picture <span className="text-gray-500 text-sm">{"(optional)"}</span></label> */}
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-left">Username</label>
                    <Input isRequired label="username" type="text" {...register("name", { required: true })} />
                    <label className="text-left">Email</label>
                    <Input isRequired label="email" type="email" {...register("email", { required: true })} />
                    <label className="text-left">Password</label>
                    <Input isRequired label="password" type="password" {...register("password", { required: true })} />
                    <label className="text-left">Confirm Password</label>
                    <Input isRequired label="confirm password" type="password" validationState={(watch("password_confirmation", '') !== watch("password", '')) && confirmationTouched ? "invalid" : "valid"} onTouchStart={() => setConfirmationTouched(true)} {...register("password_confirmation", { required: true })} />
                    <p>already have an account ? <Link href="/auth/login" showAnchorIcon className="underline text-blue-500">Login</Link></p>
                    <Button type="submit" className="lg:w-1/2 w-full bg-gradient-to-tr font-semibold text-white from-green-500 to-green-700">Submit</Button>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex flex-row items-center gap-2 justify-center">
                            <Divider className="w-[45%]" />
                            or
                            <Divider className="w-[45%]" />
                            {/* <Divider /> */}
                        </div>
                        <div className="w-full flex flex-row justify-between gap-4">
                            <Button className="bg-gray-300 w-full" startContent={<Image src={google} className="w-5" />} >  Google</Button>
                            <Button className="w-full bg-blue-300" startContent={<Image src={facebook} className="w-5" />}>  Facebook</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
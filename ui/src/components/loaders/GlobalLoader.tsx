import { Spinner } from "@nextui-org/react"




export default function GlobalLoader() {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 z-50 flex flex-col justify-center items-center bg-slate-100 bg-opacity-50">
            <div className="w-20 h-20 rounded-full bg-white flex flex-col justify-center items-center">
                <Spinner className="w-40" color="success" />
            </div>
        </div>
    )
}
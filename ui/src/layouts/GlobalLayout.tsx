import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { Outlet } from 'react-router-dom'
import GlobalLoader from '../components/loaders/GlobalLoader'




export default function GlobalLayout() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }
            , 3000)
        return () => {
            setLoading(true)
        }
    }, [])




    return (
        <>
            {
                loading
                    ?
                    <GlobalLoader />
                    :
                    <Outlet />
            }

        </>
    )
}
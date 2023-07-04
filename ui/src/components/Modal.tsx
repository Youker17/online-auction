import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
    open: boolean;
    onExit: () => void;
    className?: string;
    children: React.ReactNode;
}





export default function Modal({ children, open, onExit, className, ...props }: ModalProps) {
    useEffect(() => {
        console.log(open);
    }, [open])

    return (
        <dialog open={open} className={className} {...props}>
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            className=' w-full h-full flex flex-col justify-center items-center bg-opacity-80 p-5'>
                {children}
                <div className='w-[80%] pt-4 container '>
                    <button className="btn btn-danger bg-red-500 rounded-full px-10" onClick={onExit}>Exit</button>
                </div>
            </motion.div >
            </AnimatePresence>
        </dialog>
    )
}

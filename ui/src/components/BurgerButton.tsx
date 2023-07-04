


interface BurgerButtonProps {
    visible: boolean;
    className?: string;
    onClose: () => void;
}






export default function BurgerButton({visible, className, onClose}:BurgerButtonProps){




    return(
        <button className={"z-50 "+className} onClick={onClose}>
            <div className="flex flex-col w-10 gap-2 z-50">
                <span className={`border h-1.5 bg-white transition-transform ${visible ? 'origin-left rotate-45' : "" }`}></span>
                <span className={`border  h-1.5 bg-white transition-transform ${visible ? 'invisible' : "" }`}></span>
                <span className={`border h-1.5 bg-white transition-transform ${visible ? 'origin-left -rotate-45' : "" }`}></span>
            </div>
        </button>

    )
}
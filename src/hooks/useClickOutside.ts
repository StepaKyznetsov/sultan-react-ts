import {useEffect} from "react";

export const useClickOutside = (
    ref: any, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target))
                setOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])
}
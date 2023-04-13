import { useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
): void {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
}

import { useContext, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import iconMenu from '../assets/menu.png'
import iconClose from '../assets/close.png'

import { MenuMobileIsVisibleContext } from '../contexts/menuMobileIsVisibleContext'

export function Header() {

    const { menuMobileIsVisible, setMenuMobileIsVisible } = useContext(MenuMobileIsVisibleContext)

    const menuOpenRef = useRef(null)
    const menuCloseRef = useRef(null)

    useEffect(() => {
        if (menuMobileIsVisible){
            menuCloseRef.current.classList.remove('hidden')
            menuOpenRef.current.classList.add('hidden')
        } else {
            menuCloseRef.current.classList.add('hidden')
            menuOpenRef.current.classList.remove('hidden')
        }
    
        
    }, [menuMobileIsVisible])
    
    return (
        <div>
            <header className="w-full p-5 flex gap-5 items-center justify-between bg-gray-700 border-b border-gray-600 lg:justify-center">
                <Logo/>
                <div className="flex gap-3 items-center lg:hidden">
                    <p>Aulas</p>
                    <img 
                        ref={menuOpenRef}
                        onClick={() => setMenuMobileIsVisible(true)} 
                        className="cursor-pointer"
                        src={iconMenu} 
                    />
                    <img 
                        ref={menuCloseRef}
                        onClick={() => setMenuMobileIsVisible(false)} 
                        className="hidden cursor-pointer" 
                        src={iconClose} 
                    />
                </div>
            </header>
        </div>
    )
}
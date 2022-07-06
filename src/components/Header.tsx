import { useContext } from "react";
import { Logo } from "./Logo";
import iconMenu from '../assets/menu.png'
import iconClose from '../assets/close.png'

import { MenuMobileIsVisibleContext } from '../contexts/menuMobileIsVisibleContext'

export function Header() {

    const { menuMobileIsVisible, setMenuMobileIsVisible } = useContext(MenuMobileIsVisibleContext)
    
    return (
        <div>
            <header className="w-full p-5 flex gap-5 items-center justify-between bg-gray-700 border-b border-gray-600 lg:justify-center">
                <Logo/>
                <div className="flex gap-3 items-center lg:hidden">
                    <p>Aulas</p>
                    <img 
                        onClick={() => setMenuMobileIsVisible(true)} 
                        className={menuMobileIsVisible ? 'hidden cursor-pointer' : 'cursor-pointer'}
                        src={iconMenu} 
                    />
                    <img 
                        onClick={() => setMenuMobileIsVisible(false)} 
                        className={menuMobileIsVisible ? 'cursor-pointer' : 'hidden cursor-pointer'}
                        src={iconClose} 
                    />
                </div>
            </header>
        </div>
    )
}
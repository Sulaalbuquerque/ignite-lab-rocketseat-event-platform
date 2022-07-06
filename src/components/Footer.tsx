import { useContext } from "react";
import logo from '../assets/Logo-rockeat.png'
import { MenuMobileIsVisibleContext } from "../contexts/menuMobileIsVisibleContext";

export function Footer() {

    const { menuMobileIsVisible, setMenuMobileIsVisible } = useContext(MenuMobileIsVisibleContext)

    return (
        <footer className={menuMobileIsVisible 
                           ? 'hidden bg-black w-full flex-col p-5 gap-4 lg:flex-row lg:justify-between' 
                           : 'bg-black w-full flex flex-col p-5 gap-4 lg:flex-row lg:justify-between'}
        >
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-5 lg:items-center">
                <div className="flex justify-center">
                    <img src={logo} width="150"/>
                </div>
                <p className='flex justify-center text-gray-300 text-xs'>Rocketseat - Todos os direitos reservados</p>
            </div>
            <p className='flex justify-center text-gray-300 text-xs lg:items-center'>Políticas de privacidade</p>
        </footer>
    )
}
import { Logo } from "./Logo";
import iconMenu from '../assets/menu.png'
import iconClose from '../assets/close.png'

export function Header() {
    return (
        <div>
            <header className="w-full p-5 flex gap-5 items-center justify-between bg-gray-700 border-b border-gray-600 lg:justify-center">
                <Logo/>
                <div className="flex gap-3 items-center lg:hidden">
                    <p>Aulas</p>
                    <img src={iconMenu} alt="" />
                    <img className="hidden" src={iconClose} alt="" />
                </div>
            </header>
        </div>
    )
}
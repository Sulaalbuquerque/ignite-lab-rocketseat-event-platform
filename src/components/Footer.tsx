import logo from '../assets/Logo-rockeat.png'

export function Footer() {
    return (
        <footer className='bg-black w-full flex flex-col p-5 gap-3'>
            <div className="flex justify-center">
                <img src={logo} width="150"/>
            </div>
            <p className='flex justify-center text-gray-400 text-xs'>Rocketseat - Todos os direitos reservados</p>
            <p className='flex justify-center text-gray-400 text-xs'>Políticas de privacidade</p>
        </footer>
    )
}
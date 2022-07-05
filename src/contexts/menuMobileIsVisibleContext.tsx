import { createContext, ReactNode, useState } from "react";

const initialValue = {
  menuMobileIsVisible: false,
  setMenuMobileIsVisible: () => {}
}

export const MenuMobileIsVisibleContext = createContext<UserContext>(initialValue);

interface UserContext {
  menuMobileIsVisible: boolean,
  setMenuMobileIsVisible: (newState: boolean) => void
}
interface ContextProviderProps {
  children: ReactNode
}

export const MenuMobileIsVisibleContextProvider = ({ children }: ContextProviderProps) => {

  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(initialValue.menuMobileIsVisible)
  
  return (
    <>
      <MenuMobileIsVisibleContext.Provider value={{ menuMobileIsVisible, setMenuMobileIsVisible }}>
        {children}
      </MenuMobileIsVisibleContext.Provider>
    </>
  )
} 
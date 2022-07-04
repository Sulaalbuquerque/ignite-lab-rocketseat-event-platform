import { createContext, ReactNode, useState} from "react";

interface AppContextInterface {
  menuMobileIsVsible: boolean,
  setMenuMobileIsVisible: React.ReactNode
}

export const MenuMobileIsVisibleContext = createContext<AppContextInterface | null>(null);

interface PropsMenuMobileIsVisibleContextProvider {
  children: React.ReactNode
}

export const MenuMobileIsVisibleContextProvider = ({ children }: PropsMenuMobileIsVisibleContextProvider) => {

    const [menuMobileIsVsible, setMenuMobileIsVisible] = useState(false)
    console.log(menuMobileIsVsible)
  return (
    <>
      <MenuMobileIsVisibleContext.Provider value={{ menuMobileIsVsible, setMenuMobileIsVisible }}>
        {children}
      </MenuMobileIsVisibleContext.Provider>
    </>
  )
} 
import { createContext, useState} from "react";

export const MenuMobileIsVisibleContext = createContext();

export const MenuMobileIsVisibleContextProvider = ({ children }) => {

    const [menuMobileIsVsible, setMenuMobileIsVisible] = useState(false)
  
  return (
    <>
      <MenuMobileIsVisibleContext.Provider value={{ menuMobileIsVsible, setMenuMobileIsVisible }}>
        {children}
      </MenuMobileIsVisibleContext.Provider>
    </>
  )
} 
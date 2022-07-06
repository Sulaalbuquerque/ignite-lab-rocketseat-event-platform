import { useContext } from "react";
import { MenuMobileIsVisibleContext } from "../contexts/menuMobileIsVisibleContext";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Footer } from '../components/Footer'
import imgMd from '../assets/wallpaper/Wallpaper - 1400x900.png'

export function Event() {

    const { menuMobileIsVisible } = useContext(MenuMobileIsVisibleContext)

    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1 justify-between">
                <div 
                    className={menuMobileIsVisible ? 'hidden w-full' : 'visible w-full'}
                >
                    { 
                        slug 
                        ? <Video lessonSlug={slug}/> 
                        : <div className="flex-1 h-screen w-full">
                            <img 
                                src={imgMd} 
                                className={menuMobileIsVisible 
                                           ? 'hidden h-full w-full' 
                                           : 'h-full w-full'}
                            />
                        </div>
                    }
                    <Footer/>
                </div>
                <Sidebar/>
            </main> 
        </div>
    )
}
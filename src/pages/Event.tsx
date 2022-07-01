import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Footer } from '../components/Footer'

export function Event() {

    const { slug } = useParams<{ slug: string }>()

    console.log(slug)

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                <div>
                    { 
                        slug 
                        ? <Video lessonSlug={slug}/> 
                        : <div className="flex-1 h-full w-full"></div>
                    }
                    <Footer/>
                </div>
                <Sidebar/>
            </main> 
        </div>
    )
}
import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { useContext, useRef, useEffect } from "react";
import { MenuMobileIsVisibleContext } from "../contexts/menuMobileIsVisibleContext";

export function Sidebar() {

    const asideRef = useRef(null)

    const { data } = useGetLessonsQuery()

    const { menuMobileIsVisible, setMenuMobileIsVisible } = useContext(MenuMobileIsVisibleContext)

    useEffect(() => {
        if (menuMobileIsVisible) {
            asideRef.current.classList.remove('hidden')
            

        } else {
            asideRef.current.classList.add('hidden')
        }
    }, [menuMobileIsVisible])

    return (
        <aside ref={asideRef} className="hidden w-[480px] bg-gray-700 p-6 border-l border-gray-600 lg:block">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                    )
                })}
            </div>
        </aside>
    )
}
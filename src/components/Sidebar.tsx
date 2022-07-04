import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { useState, useContext, useRef, ReactNode } from "react";
import { MenuMobileIsVisibleContext } from "../contexts/menuMobileIsVisibleContext";

interface PropsSidebar {
    menuMobileIsVisible: boolean,
    setMenuMobileIsVisible: ReactNode,
}

export function Sidebar() {

    const aside = useRef(null)

    const { data } = useGetLessonsQuery()

    const { menuMobileIsVisible, setMenuMobileIsVisible } = useContext<PropsSidebar>(MenuMobileIsVisibleContext)

    console.log(menuMobileIsVisible)

    if (menuMobileIsVisible){
        console.log('go')
    }

    return (
        <aside ref={aside} className="hidden w-[480px] bg-gray-700 p-6 border-l border-gray-600 lg:block">
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
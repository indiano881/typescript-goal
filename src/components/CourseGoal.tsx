import { FC, PropsWithChildren, type ReactNode } from "react"

/* ALTERNATIVE WITHOUT DISCRUCTURING

export default function CourseGoal(props:{
    title: string, description: string
})*/
type CourseGoalProp = {
    title: string, 
    children: ReactNode
}
/*
type CoursePorps= PropsWithChildren<{title: string}>
*/

export default function CourseGoal({title, children}:CourseGoalProp) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
                
            </div>
            <button>delete</button>

        </article>
    )
}

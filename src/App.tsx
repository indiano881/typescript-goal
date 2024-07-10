import { ReactNode, useState } from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "/goals.jpg"


type CourseGoal = {
  title: string,
  description: ReactNode,
  id: number
}


export default function App() {

    const [goal, setGoal] = useState<CourseGoal[]>([])


  const handleGoal = () => {
    setGoal((prevGoals)=> {
      const newGoal: CourseGoal = {
        title: "hello",
        description: "banan",
        id: 3
      }
      return [...prevGoals, newGoal ]

    })
  }


  return (
    <>
    <Header src={goalsImg} alt={"image"}  >
        your course goal
    </Header>
    <button onClick={handleGoal}>Add goal</button>
    <CourseGoal title="Learn TS+ React" children="an amazing course!!!"/>
    <ul>
    {goal.map((item, index)=>
    
      <li index={item.id}>
            <CourseGoal children={undefined} {...item}/>


      </li>
      
      )}
    </ul>
    </>
  ) 
}

import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "/goals.jpg"


export default function App() {
  return (
    <>
    <Header src={goalsImg} alt={"image"}  >
        your course goal
    </Header>
    <CourseGoal title="Learn TS+ React" children="an amazing course!!!"/>
    
    
    </>
  ) 
}

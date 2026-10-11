
import Result from "./Result";
import Activity from "./Activity";
import Sumarry from "./Sumarry";
import data from '../data.json'

export default function App(){
  const dates = data.map(Element=>{
    return (
      <Activity img={Element.icon} name={Element.category} number={Element.score} />
    )
  })
  
  const total = data.reduce((suma, e)=> suma + e.score, 0)
  const average = Math.trunc(total / data.length);
  return (
    <div className="container">
    <Result average={average}/>
    <Sumarry>
      {dates}
      <button>Continue</button>
    </Sumarry>
    </div>
  )
}
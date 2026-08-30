import data from './data.json'

import Header  from './components/Header'
import Skill from './components/Skill'




export default function App(){
 const skillnew = data.map((element) => {
  
  
  return <Skill img={`${import.meta.env.BASE_URL}${element.icon}`}
  
                title={element.category}
                score={element.score}

  />
 })
 
  return (
 
 <div className='container'>
  <Header />
  <main>
    <h3>Summary</h3>
    {skillnew}
    <button>Continue</button>
  </main>
  </div>)
}

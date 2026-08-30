export default function Skill(props){
    return(
   
    
    <div className="skill">
    <div className="info-skill">
    <img src={props.img} />
      <span>{props.title}</span>
    </div>
      
      <p className="score-info">{props.score}<span id="score-100">/10</span></p>
    </div>
   
    )
}
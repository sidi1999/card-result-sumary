export default function Activity({img, name, number}){
    
    return(
        <div className="activity">
            <img src={img} alt="" />
            <p className="category">{name}</p>
            <p>{number}/10</p>
        </div>
    )
}
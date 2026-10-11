export default function Sumarry ({children}){
    return (
        <div className="summary">
        <h2>Summary</h2>
        <div className="cards">{children}</div>
        </div>
    )
}
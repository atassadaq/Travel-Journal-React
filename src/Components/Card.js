
export default function Card(props) {
    return(
        <div className="card">
           <img className="loc--img" src={props.item.imageUrl} />
           <div className="info">
               <span>📍 {props.item.location.toUpperCase()}</span><a href="https://www.w3schools.com/">View on google maps</a>

               <h1>{props.item.title}</h1>
               <h4>{props.item.startDate}   -   {props.item.endDate}</h4>
               <p>{props.item.description}</p>
           </div>
        </div>
    )
}
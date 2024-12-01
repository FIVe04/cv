import "../technologyCard.css"

const TechnologyCard = (props:any) => {
  return (
    <div className="technology-card-outer">
        <img src={props.icon} className="technology-card-icon"/>
        <h2 className="technology-card-name">{props.name ? props.name : "Technology..."}</h2>
    </div>
  )
}

export default TechnologyCard
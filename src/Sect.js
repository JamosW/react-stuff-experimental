export default function Sect(props) {
  return (
    <div className="section">
      <img className="section--img" src={props.source} alt="a" />
      <div className="rightSect">
        <div className="top-text">
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}> View on Google Maps </a>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="dates">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="description">{props.description} </p>
      </div>
    </div>
  );
}

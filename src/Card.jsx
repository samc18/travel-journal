export default function Card(props) {
    return (
        <section>
            <img src={props.item.imageUrl} />

            <div className="cardbox">
                <div className="locationbox">
                    <p className="location">{props.item.location}</p>
                    <a className="link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </section>
    )
}
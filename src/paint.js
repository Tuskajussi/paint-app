const Paint = ({name, sqm, surface, paintname, price, adequacy}) => {

    return(
        <article className="grid-item">
            <h1>{name}</h1>
            <p>{sqm * price * adequacy} € for this room</p>
            <p>{adequacy} Layers to paint for this surface with standard paints</p>
        </article>
    );
}

export default Paint;
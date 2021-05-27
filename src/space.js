const Space = ({name, sqm, surface}) => {
    return(
        <article className="grid-item">
            <h1>{name}</h1>
            <p>{sqm} Square Meters</p>
            <p>{surface} Layers to paint for this surface with standard paints</p>
        </article>
    );
}

export default Space;
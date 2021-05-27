const Space = ({name, sqm, surface}) => {
    
    return(
        <article className="grid-item">
            <h3>{name}</h3>
            <p>{sqm} &#13217;</p>
            <p>{surface} Layers to paint for this surface with standard paints</p>
        </article>
    );
}

export default Space;
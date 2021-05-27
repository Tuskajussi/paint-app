const Paint = ({name, sqm, surface, values}) => {

    let liters = ((sqm * surface) * values.levels) / values.adequacy;
    let totalPrice = liters * values.price;
    return(
        <article className="grid-item">
            <h3>{name} painted with {values.name}</h3>
            <p>{liters.toFixed(2)} liters of paint needed</p>
            <p>{totalPrice.toFixed(2)} € in costs</p>
        </article>
    );
}

export default Paint;
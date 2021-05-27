import Paint from './paint';


const Painted = ({data, form}) => {
    let totalArea=0;
    let totalAreaSurface=0;
    let totalCosts=0;
    data.map(room => {
        totalArea += room.sqm;
        totalAreaSurface += room.sqm * room.surface;
        return true;
    })
    let totalLitres = (totalAreaSurface * form.levels) / form.adequacy;
    totalCosts = totalLitres * form.price;


    return (
        <>
        <section className="grid-wrapper">
            <h1>Paint amounts and costs per room:</h1>
            {
            data.map(room => (
                    <Paint key={room.name}{...room} values={form} />
                )
            )
            }
        </section>
        <section className="total">
            <h3>In total:</h3>
            <p>Total area to be painted: {totalArea} &#13217;</p>
            <p>Total area using surface modifiers: {totalAreaSurface.toFixed(2)} &#13217; </p>
            <p>Total litres needed: {totalLitres.toFixed(2)} l</p>
            <p>Total costs for the building are: {totalCosts.toFixed(2)} €</p>
        </section>
        </>
    );
}

export default Painted;
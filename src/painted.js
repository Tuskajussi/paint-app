import Paint from './paint';

const Painted = ({data, formData}) => {

    return (
        <section className="grid-wrapper">
           {
           data.map( room => (
                    <Paint values={formData} key={room.name}{...room}  />
                )
           )
         }
        </section>
    );
}

export default Painted;
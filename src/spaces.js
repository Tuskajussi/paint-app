import Space from './space';

const Spaces = ({data}) => {

    return (
        <section className="grid-wrapper">
           {
           data.map( room => (
                    <Space key={room.name}{...room}  />
                )
           )
         }
        </section>
    );
}

export default Spaces;
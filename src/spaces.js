import Space from './space';

const Spaces = ({data}) => {

    return (
        <section className="grid-wrapper">
           <h1>Information about the rooms to be painted:</h1>
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
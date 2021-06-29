import EventItem from "./EventItem";

function EventList({ events }) {
    return (
        <div className="" >
            {events.map((event) => (
                <EventItem 
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    title={event.title}
                    address={event.address}
                    description={event.description}
                />
            ))}
        </div>
    )
}

export default EventList

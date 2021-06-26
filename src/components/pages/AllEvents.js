import EventList from "../meetups/EventList";

function AllEvents() {

    const DUMMY_DATA = [
        {
            id: 'm1',
            title: 'This is a first meetup',
            image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        {
            id: 'm2',
            title: 'This is a second meetup',
            image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        ];

    return (
        <div>
            <h1 className=" text-[20px] px-4 md:text-[40px] md:p-4" >All Events</h1>
            <EventList events={DUMMY_DATA} />
           
        </div>
    )
}

export default AllEvents;

import { useState, useEffect } from "react";
import EventList from "../events/EventList";

function AllEvents() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedEvents, setLoadedEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true); 
        fetch(
            "https://event-project-7bfa8-default-rtdb.firebaseio.com/events.json"
        ).then(response => {
            return response.json();
        }).then(data => {
            const events = [];

            for (const key in data) {
                const event = {
                    id: key,
                    ...data[key]
                };

                events.push(event);
            }
            setIsLoading(false);
            setLoadedEvents(events); 
        });
        }, []);

    
   
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        ) 
    }
                

    return (
        <div className="mainContainer md:mt-[50px] min-h-[100vh] " >
            <div className="ml-0">
                <h1 className=" headings" >All Events</h1>
                <EventList events={loadedEvents} />
            </div>
            
           
        </div>
    )
}

export default AllEvents;

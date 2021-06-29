import NewEventForm from "../events/NewEventForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

function NewEvents() {
    const history = useHistory();

    function addEventHandler(eventData) {

        axios ({
            method: 'post',
            url: 'https://event-project-7bfa8-default-rtdb.firebaseio.com/events.json',
            data: JSON.stringify(eventData)
            }).then(() => {
                history.replace("/"); 
            })

    }

    return (
        <div className="mainContainer md:mt-[50px] min-h-[100vh]">
            <div className="ml-0">
                <h1 className="headings" >Add Event</h1>
                <NewEventForm className="" onAddEvent={addEventHandler} />
            </div>
        </div>
    )
}

export default NewEvents

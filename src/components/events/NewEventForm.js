import { useRef } from "react";

function NewEventForm ({onAddEvent}) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value; 
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription =descriptionRef.current.value;

        const eventData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        onAddEvent(eventData);

    }

    return (
        <div className=" h-[100vh] p-4 max-w-[700px] sm:min-w-[100vh] ">
            <form className="card p-4" onSubmit={submitHandler}>
                <div className="formDiv">
                    <label htmlFor="title">Event Title</label>
                    <input type="text" title="title" id="title" required className="formInput" ref={titleInputRef} />
                </div>
                <div className="formDiv">
                    <label htmlFor="image">Event Image Url</label>
                    <input type="url" title="image" id="image" required className="formInput" ref={imageInputRef} />
                </div>
                <div className="formDiv">
                    <label htmlFor="address">Address</label>
                    <input type="text" title="address" id="address" required className="formInput" ref={addressInputRef}/>
                </div>
                <div className="formDiv">
                    <label htmlFor="address">Description</label>
                    <textarea type="text" title="description" id="description" required rows="5" className="formInput" ref={descriptionRef}/>
                </div>
                <div className=" flex justify-end">
                    <button className="my-5 transiton duration-150 transform hover:scale-105 btn">Add Meetup</button>
                </div>
                
            </form>
        </div>
    )
}

export default NewEventForm;
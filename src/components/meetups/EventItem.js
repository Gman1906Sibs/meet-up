function EventItem({ key, id, image, title, address, description }) {
    return (
        <div className="p-4 ">
                <div className=" bg-gray-100 pb-3 rounded-lg flex flex-col  max-w-full mb-10" >
                    <img className=" rounded-t-md " src={image} alt=""/>
                    <div className=" flex flex-col items-center p-2 ">
                        <h3 className="text-lg text-red-400 " >{title}</h3>
                        <p className=" text-gray-500 text-sm " >{address}</p>
                        <p className=" text-sm align-middle text-center mt-1 line-clamp-2 " >{description}</p>

                        <button className="p-2 mt-2 bg-red-400 text-white rounded-md transiton duration-150 transform hover:scale-105 hover:bg-red-600 " >Add To Favorites</button>
                    </div>
                </div>
        </div>
        
    )
}

export default EventItem

import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

function EventItem({ key, id, image, title, address, description }) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

    function toggleFavoritesStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        }else {
            favoritesCtx.addFavorite({
                id: id,
                image: image,
                title: title,
                address: address,
                description: description,
            });
        }
    }

    return (
        <div className="p-4 max-w-[700px] ">
                <div className=" card " >
                    <img className=" rounded-t-md " src={image} alt=""/>
                    <div className=" flex flex-col items-center p-2 ">
                        <h3 className="text-lg text-red-400 p-3 " >{title}</h3>
                        <p className=" text-gray-500 text-sm p-1 " >{address}</p>
                        <p className=" text-sm align-middle text-center mt-1 line-clamp-2 p-1 " >{description}</p>

                        <button className="m-5 transiton duration-150 transform hover:scale-105 btn" onClick={toggleFavoritesStatusHandler}>
                            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
                        </button>
                    </div>
                </div>
        </div>
        
    )
}

export default EventItem

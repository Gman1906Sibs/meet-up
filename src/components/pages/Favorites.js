import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import EventList from "../events/EventList";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have got no favorites yet. start adding some!</p>
    } else {
        content = <EventList events={favoritesCtx.favorites} />
    }

    return (
        <div className="mainContainer md:mt-[50px] min-h-[100vh]">
            <div className="ml-0">
                <h1 className="headings">My Favorites</h1>
                {content}
            </div>
        </div>
    )
}

export default Favorites;

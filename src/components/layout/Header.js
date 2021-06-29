import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import { CalendarIcon, ViewGridAddIcon, LocationMarkerIcon } from "@heroicons/react/solid";

function Header() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className="flex bg-white md:bg-red-400  p-2 justify-between items-center md:fixed top-0 md:w-full ">
            <h1 className=" ml-3 sm:ml-8 text-[30px] text-red-400 md:text-white ">Upcoming Events</h1>
            <div className="">
                <ul className="z-10 flex fixed left-0 bottom-0 w-full px-10 py-2  bg-white justify-between md:left-auto md:relative md:top-0 md:w-auto md:bg-red-400 md:flex flex-row ">
                    <li className="links">
                        <Link to="/">
                            <span className="hidden md:inline-block">All Events</span>
                            <span className=""><CalendarIcon className="h-8 text-red-400 md:hidden hover:text-red-600" /> </span>
                        </Link>
                    </li>

                    <li className="links">
                        <Link to="/new-event">
                            <span className="hidden md:inline-block">Add Event</span> 
                            <span className=""><ViewGridAddIcon className="h-8 text-red-400 md:hidden hover:text-red-600" /> </span>
                        </Link>
                    </li>

                    <li className="links">
                        <Link to="/favorites">
                            <span className="hidden md:inline-block">Favorite Events</span>
                            <span className=""><LocationMarkerIcon className="h-8 text-red-400 md:hidden hover:text-red-600" /> </span>
                            <span className="bg-red-400 px-2 py-1 rounded-full text-xs absolute top-0 left-10 md:relative md:bg-white md:text-red-400 md:left-auto md:top-[-2px] ">{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
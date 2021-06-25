import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex bg-red-400 p-2 justify-between items-center ">
            <h1 className=" text:xs ml-3 sm:ml-8 md:text-[30px] text-white  ">Meetups Project</h1>
            <div className="">
                <ul className="flex">
                    <li className="links">
                        <Link to="/">
                            All <span className="hidden md:inline-block">Meetups</span>
                        </Link>
                    </li>

                    <li className="links">
                        <Link to="/new-meetup">
                            Add <span className="hidden md:inline-block">Meetup</span> 
                        </Link>
                    </li>

                    <li className="links">
                        <Link to="/favorites">
                            Favorites <span className="hidden md:inline-block">Meets</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
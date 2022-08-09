

const Navbar = () => {

    return(
        <>
        <div className="bg-gray-900">
        <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                <a  className="flex items-center pr-2" aria-current="page">
                    <img className="h-10" src="logo.svg" />
                </a>
                    <ul className="hidden  py-4 flex-1 items-center md:flex space-x-3 sm:space-x-6 sm:justify-end">
                      
                                <li className="text-gray-200" >
                                    <a >Telegram</a>
                                </li>
                                <li className="text-gray-200" >
                                    <a>Buy</a>
                                </li>
                      
                        <li>
                            <a  className="flex items-center text-gray-200">
                               Discord
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}

export default Navbar
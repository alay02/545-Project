import logo from '../images/logo.png'

export function AppHeader() {
    return (
        <header>
            <div id="header-logo">
                <h1><a href="/" id="title"><img src={logo} alt="Taste of the Town" width="260" height="100"></img></a></h1>
            </div>
            <div id="header-buttons">
                <button id="sign-in" className="nineth">Sign-in</button>
                <div className="search eighth">
                    <input type="text" id="searchInput" placeholder="Search Restaurants/Towns..." aria-label="Search Input"></input>
                    <button id="searchButton" aria-label="Search Button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default function Header(){
    return(
        <div id="navbar">
            <h3>WeatherCast</h3>
            <div className="wrapper">
                <div className="search-box">
                    <input className="search-txt" type="text" placeholder="Enter Country name" />
                        <a className="icon" href="/#">
                            <i className="fas fa-search"></i>
                        </a>
                    <div className="sugg-box"></div>
                </div>
            </div>
        </div>
    )
}
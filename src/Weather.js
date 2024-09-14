export default function Weather() {
    return (
        <div className="weather-app">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-form-input"
            id="search-form-input"
          />
          <input type="submit" value="search" className="search-form-button" />
        </form>
      </header>
  
      <footer>
        This project was coded by {" "}
        <a href="https://github.com/opease" target="_blank" rel="noreferrer">Odille Pease</a>
        {" "} open-sourced on {" "}
        <a href="https://github.com/opease/React-Weather" target="_blank" rel="noreferrer">GitHub</a>
        {" "} and website hosted on {" "}
        <a href="https://react-weather-opease.netlify.app/" target="_blank" rel="noreferrer">
           Netlify
        </a>
      </footer>
    </div> 
    );
}
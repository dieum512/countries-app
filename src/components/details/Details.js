import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./details.css"

const Details = () => {
    const { CountryName } = useParams();

    const { countryData } = useSelector((store) => store.country);
    const uniqueName = countryData.find((item) => item.name === CountryName);

    return (
        <>
        <div className="main-container">
            <div className="flag-container">
                <h1>{uniqueName.name ? uniqueName.name: 'none'}</h1>
                <img src={uniqueName.flag} alt="Country flag" />
            </div>
            <h2 className="country-status">City/Town BreakDown - 2023</h2>
            <div>
                <h2 className="country-info">
                    <span>Name:</span>
                    {uniqueName.name ? uniqueName.name : 'none'}
                </h2>
                <h2 className="country-info">
                    <span>Capital:</span>
                    {uniqueName.capital ? uniqueName.capital : 'none'}
                </h2>
                <h2 className="country-info">
                    <span>Continent:</span>
                    {uniqueName.continent ? uniqueName.continent : 'none'}
                </h2>
                <h2 className="country-info">
                    <span>Population:</span>
                    {uniqueName.population ? uniqueName.population : 'none'}
                </h2>
                <h2 className="country-info">
                    <span>Area:</span>
                    {uniqueName.area ? uniqueName.area : 'none'}
                    km²
                </h2>
                <h2 className="country-info"><a href={uniqueName.map ? uniqueName.map : 'none'}>Map</a></h2>
            </div>
        </div>
        </>
    )
}

export default Details;
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Nav from "../nav/Nav";
import globe from '../images/globe.png';
import globeBg from '../images/globe-bg.jpg';
import './home.css';

const Home = () => {
  const { countryData } = useSelector((store) => store.country);

  const [searchCountry, setSearchCountry] = useState('');

  const handleCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredData = countryData.filter((item) => (
    item.name.toLowerCase().includes(searchCountry.toLowerCase())
  ));

  return (
    <>
      {/* <Nav /> */}
      <input type="text" value={searchCountry} onChange={handleCountry} placeholder="Search for country here" className="search-bar" />
      <img src={globeBg} alt="globe" className="globe-bg" />
      <div className="title-container">
        <h3>ALL THE COUNTRIES</h3>
      </div>
      <div className="country-container">
        {filteredData.map((item) => (

          <Link to={`/countries/${item.name}`} key={item.name} className="a-card">
            <img src={globe} alt="A globe" className="country-image" />
            <div className="item-container">
              <h3>{item.name}</h3>
              <h3>{item.population}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

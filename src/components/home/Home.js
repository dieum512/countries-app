import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="input-container">
        <input type="text" value={searchCountry} onChange={handleCountry} placeholder="Search for country here" className="search-bar" />
      </div>
      <div className="title-container">
        <h3>ALL THE COUNTRIES</h3>
      </div>
      <div className="country-container">
        {filteredData.map((item) => (

          <Link to={`/countries/${item.name}`} key={item.name} className="a-card">
            <img src={item.flag} alt="A globe" className="country-image" />
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

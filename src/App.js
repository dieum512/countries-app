import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { countriesItem } from "./redux/country/countriesSlice";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Details from "./components/details/Details";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesItem())
  }, [dispatch])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:CountryName" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;

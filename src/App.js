import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error loading countries:', error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route path="/:id" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

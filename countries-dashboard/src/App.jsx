import { useState, useEffect } from 'react'
import { fetchCountries } from './services/api'
import CountryList from './components/CountryList'
import SearchBar from './components/SearchBar'
import RegionFilter from './components/RegionFilter'
import CountryDetail from './components/CountryDetail'

function App() {
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {

    const loadCountries = async () => {

      try {

        const data = await fetchCountries.getAllCountries();

        setCountries(data);
        setLoading(false);

      }catch (error) {
        
        setError(error.message);
        setLoading(false);

      }

    };

    loadCountries();

  }, []);

  const filteredCountries = countries.filter((country) => {
   
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion = region === '' ||  country.region === region;

    return matchesSearch && matchesRegion;

});

  if(loading) return <p> Cargando lista de países... </p>;
  if(error) return <p> Error: {error} </p>;

return (
    <div>
      <header style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <h1>Where in the world?</h1>
      </header>
      
      <main style={{ padding: '20px' }}>
        
        {selectedCountry ? (
          <CountryDetail country={selectedCountry} onBack={() => setSelectedCountry(null)}/>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <SearchBar onSearch={setSearchTerm} />
              <RegionFilter onSelectRegion={setRegion} />
            </div>
            <CountryList countries={filteredCountries} onCountryClick={setSelectedCountry}/>
          </>
        )}

      </main>
    </div>
  );
}
export default App;

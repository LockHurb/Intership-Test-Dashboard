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

  if(loading) return <p className="text-center mt-20 text-gray-600 text-xl font-semibold animate-pulse"> Cargando lista de países... </p>;
  if(error) return <p className="text-center mt-20 text-red-500 text-xl font-bold"> Error: {error} </p>;

return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="p-6 bg-white shadow-sm border-b border-gray-200">
        <h1 className="text-xl font-extrabold tracking-tight">Where in the world?</h1>
      </header>
      
      <main className="p-6 max-w-7xl mx-auto">
        
        {selectedCountry ? (
          <CountryDetail country={selectedCountry} onBack={() => setSelectedCountry(null)}/>
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
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
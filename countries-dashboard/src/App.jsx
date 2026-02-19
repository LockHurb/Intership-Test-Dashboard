import { useState, useEffect } from 'react'
import { fetchCountries } from './services/api'
import CountryList from './components/CountryList'
import SearchBar from './components/SearchBar'
import RegionFilter from './components/RegionFilter'
import CountryDetail from './components/CountryDetail'
import useDarkMode from './hooks/useDarkMode'

function App() {
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);

  const [colorTheme, setTheme] = useDarkMode();

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

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-sm py-6 px-4 md:px-16 mb-10 flex justify-between items-center transition-colors duration-300">
        <h1 className="font-extrabold text-xl md:text-2xl">Where in the world?</h1>

        <button 
          onClick={() => setTheme(colorTheme)}
          className="font-semibold flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <span>{colorTheme === 'light' ? '🌙' : '☀️'}</span> 
          {colorTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      
      <main className="container mx-auto px-4 md:px-12 pb-10">
        {loading && (
          <div className="flex justify-center mt-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900 dark:border-white"></div>
          </div>
        )}

        {error && <p className="text-center text-red-500 font-bold text-xl">{error}</p>}

        {!loading && !error && (
          <>
            {selectedCountry ? (
              <CountryDetail 
                country={selectedCountry} 
                onBack={() => setSelectedCountry(null)}
              />
            ) : (
              <>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                  <SearchBar onSearch={setSearchTerm} />
                  <RegionFilter onSelectRegion={setRegion} />
                </div>

                <CountryList 
                  countries={filteredCountries} 
                  onCountryClick={setSelectedCountry}
                />
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}
export default App;
import { useState, useEffect } from 'react'
import { fetchCountries } from './services/api'
import CountryList from './components/CountryList'
import './App.css'

function App() {
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null);

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

  if(loading) return <p> Cargando lista de países... </p>;

return (
    <div>
      <header>
        <h1>Where in the world?</h1>
      </header>
      
      <main>
        <CountryList countries={countries} />
      </main>
    </div>
  );
}


export default App;

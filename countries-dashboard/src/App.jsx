import { useState, useEffect } from 'react'
import { fetchCountries } from './services/api'
import './App.css'

function App() {
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(null);

  useEffect(() => {

    const testAPI = async () => {

      try {

        const data = await fetchCountries.getAllCountries();

        setCountries(data);
        setLoading(false);

      }catch (error) {
        
        setError(error.message);
        setLoading(false);

      }

    }

    testAPI();

  }, [])

return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-400">Dashboard de Países - Test API</h1>

      {/* Cargando datos */}
      {loading && (
        <div className="text-xl text-yellow-400 animate-pulse">
          Cargando datos de la API...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 p-6 rounded-lg max-w-md text-center">
          <p className="font-bold text-xl mb-2">Error de conexión</p>
          <p>{error}</p>
        </div>
      )}

      {/* Éxito */}
      {!loading && !error && countries.length > 0 && (
        <div className="bg-green-500/20 border border-green-500 text-green-200 p-6 rounded-lg max-w-2xl w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Conexión exitosa</h2>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              {countries.length} países encontrados
            </span>
          </div>

          <p className="mb-2 text-gray-300">Primer país recibido:</p>
          
          {/* Mostrar el primer país*/}
          <pre className="bg-gray-800 p-4 rounded text-xs overflow-auto text-left border border-gray-700 h-64">
            {JSON.stringify(countries[0], null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}


export default App;

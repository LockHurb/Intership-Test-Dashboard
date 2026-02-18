//Código para probar la api

const API_URL = 'https://restcountries.com/v3.1';
const API_CAMPOS = 'name,capital,population,region,flags';

export const fetchCountries = {

    //Buscar todos los países
    getAllCountries: async () => {

        try{

            const response = await fetch(`${API_URL}/all?fields=${API_CAMPOS}`);
            if (!response.ok) throw new Error('Error al obtener los países');
            return await response.json();

        } catch (error){

            console.error(error);
            throw error;

        }

    },

    //Buscar países por nombres

    searchCountry: async () => {
        
        try{
            const response = await fetch(`${API_URL}/name/${name}?fields=${API_CAMPOS}`);
            if (!response.ok) throw new Error('Error al buscar el país');
            return await response.json();

        } catch (error){

            console.error(error);
            throw error;

        }

    },

    //Buscar por región

    searchByRegion: async () => {
        
        try{
            const response = await fetch(`${API_URL}/region/${region}?fields=${API_CAMPOS}`);
            if (!response.ok) throw new Error('Error al buscar por región');
            return await response.json();

        } catch (error){

            console.error(error);
            throw error;

        }

    },

    //Buscar por código
    
    searchByCode: async (code) => {
        try{
            const response = await fetch(`${API_URL}/alpha/${code}?fields=${API_CAMPOS}`);
            if (!response.ok) throw new Error('Error al buscar por código');
            const data = await response.json();
            return data[0];

        } catch (error){

            console.error(error);
            throw error;

        }
    },

}
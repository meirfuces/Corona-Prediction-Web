import axios from 'axios';
const url = 'http://localhost:5000';

const urlWix = 'http://localhost:3232';

export const createApiClient = ()=> {
    return {
        getJsonState: async() =>{
            return axios.get(url)
            .then((res) => res.data);
        },
        getJsonByCountry:async(country) =>{  
        const res = await axios.get([url, '?country=', country].join(''));
        }
    }
}

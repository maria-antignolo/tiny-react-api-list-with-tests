import axios from 'axios';
const API_URL = 'https://my-json-server.typicode.com/maria-antignolo/fakeheroesapi';

export default class WritersService{

    constructor(){
      //
    }

    getwriters() {
        const url = `${API_URL}/writers`;
        return axios.get(url).then(response => response.data);
    }
    getwritersByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getWriter(pk) {
        const url = `${API_URL}/writers/${pk}`;
        return axios.get(url).then(response => response.data);
    }

}

import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/login';

const login = async(credencials) => {
    const {data}  =  await axios.post(baseUrl, credencials);
    return data;
}

export default login;
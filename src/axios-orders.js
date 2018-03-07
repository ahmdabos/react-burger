import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7c4ab.firebaseio.com/'
});

export default instance;
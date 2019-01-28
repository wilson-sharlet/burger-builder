import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-1ad88.firebaseio.com',
});

export default instance;
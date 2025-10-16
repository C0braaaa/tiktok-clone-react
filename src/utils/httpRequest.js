import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const respone = await httpRequest.get(path, options);
    return respone.data;
};

export default httpRequest;

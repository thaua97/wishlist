import axios from 'axios';

export default class config {
    constructor(baseURL) {
        this.axios = axios.create({ baseURL });
    }
}
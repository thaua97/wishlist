import Config from './config';

export default class Products extends Config {
  constructor() {
    super(process.env.API_URL);
  }

  getProducts() {
    return this.axios.get();
  }
}
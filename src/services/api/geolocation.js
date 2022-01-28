import Config from './config';

const GEO_URL = "https://maps.googleapis.com/maps/"
const API_KEY = "AIzaSyBZb0Krz8I-aOesZIJZNF3PgM9nA-ZI4Eo"

export default class Geolocation extends Config {
  constructor() {
    super('geo', GEO_URL);
  }

  getCity(lat, lng) {
    return this.geo.get(`api/geocode/json?latlng=${lat},${lng}2&sensor=true&key=${API_KEY}`);
  }
}
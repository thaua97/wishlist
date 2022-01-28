import api from '@/services/api';
import { mapGetters, mapActions, } from 'vuex';

export default {
  name: 'MNToolbar',
  computed: {
    ...mapGetters(['getLocation']),
    city () {
      return this.getLocation.city;
    }
  },
  created () {
    this.getGeolocate();
  },
  methods: {
    ...mapActions(['setLocation']),
    getGeolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    },

    async getPosition(position) {
      const geo = new api.Geolocation();

      try {
        const {data: res} = await geo.getCity(position.coords.latitude, position.coords.longitude);
        
        console.log(position.coords.latitude, position.coords.longitude);

        const cityInfo = res.plus_code.compound_code;

        const splits = cityInfo.split(',');

        this.setLocation({
          city: splits[1],
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        })
      } catch (error) {
        console.error(error);
      }
    }
  }
}
import api from '@/services/api';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    'mn-item': () => import('@/components/MNItem'),
  },
  computed: {
    ...mapGetters([
      'getProducts',
      'getWishlist'
    ]),
  },
  created () {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['setProducts', 'setWishlist']),
  
    async fetchProducts () {
      const items = new api.Products();

      try {
        const {data: res} = await items.getProducts();

        this.setProducts(res.products);
        
        console.log(this.getProducts);
      } catch (err) {
        console.error(err)
      }
    },
  }
};
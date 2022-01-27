import api from '@/services/api';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    BaseItem: () => import('@/components/BaseItem'),
  },
  computed: {
    ...mapGetters([
      'getProducts'
    ]),
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions(['setProducts']),

    async fetchProducts () {
      const items = new api.Products();

      try {
        const {data: res} = await items.getProducts();

        this.setProducts(res.products);
        console.log(this.getProducts);
      } catch (err) {
        console.error(err)
      }
    }
  }
};
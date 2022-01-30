import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    'mn-list': () => import('@/components/MNList'),
  },
  computed: {
    ...mapGetters([
      'getProducts',
      'getWishlist'
    ]),
    items () {
      return this.$route.name === 'Home' ? this.getProducts : this.getWishlist;
    }
  },
};
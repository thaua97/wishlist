import { mapGetters } from 'vuex'

export default {
  name: 'Wishlist',
  components: {
    'mn-item': () => import('@/components/MNItem'),
  },
  computed: {
    ...mapGetters([
      'getWishlist'
    ]),
  },
};
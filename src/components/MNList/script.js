export default {
  name: 'MNList',
  components: {
    'mn-item': () => import('@/components/MNItem'),
  },
  props: {
    products: {
      type: Array,
    },
  }
}
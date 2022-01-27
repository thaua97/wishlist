export default {
  name: 'BaseItem',
  components: {
    BaseBookmark: () => import('../BaseBookmark'),
  },
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          title: 'teste',
          price: 0,
          image: 'teste',
        }
      },
    }
  },
  computed: {
    price () {
      return this.product?.price;
    },
  },  
};
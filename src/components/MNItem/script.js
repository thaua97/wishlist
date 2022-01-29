import { moneyFormatter } from '@/services/formatter/currency'

export default {
  name: 'MNItem',
  components: {
    'mn-bookmark': () => import('../MNBookmark'),
    'mn-remove-bookmark': () => import('../MNRemoveBookmark'),
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
      return moneyFormatter(this.product?.price);
    },
  },

};
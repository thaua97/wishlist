import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MNBookmark',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
      checked: false,
    }
  },
  computed: {
    ...mapGetters(['getWishlist']),

    isChecked () {
      return this.checked ? '#C32B1B' : '#fff' ;
    },
  },

  created() {
    this.inWishlist();
  },
  methods: {
    ...mapActions(['setWishlist']),

    async toogleWishlist(item) {
      const wishlist = this.getWishlist;

      if(this.checked) {
        const filterItem = wishlist.filter(prod => item.id !== prod.id);

        await this.setWishlist(filterItem);

        localStorage.setItem('@wishlist', JSON.stringify(filterItem));  
        this.checked = !this.checked;

      } else {
        const newWishlist = [...wishlist, item];
       
        await this.setWishlist(newWishlist);

        localStorage.setItem('@wishlist', JSON.stringify(this.getWishlist));      

        this.checked = !this.checked;
      }
    },

    inWishlist () {
      const validator = Boolean(this.$store.state.wishlist.find(prod => this.item.id === prod.id));

      this.checked = validator;

      return validator;
    }
  }
};
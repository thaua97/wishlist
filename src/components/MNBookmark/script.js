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
      if(this.checked) {
        const wishlist = this.getWishlist;

        const filterItem = wishlist.filter(prod => item.id !== prod.id);

        await localStorage.setItem('@wishlist', JSON.stringify(filterItem));   

        this.setWishlist(filterItem);
        this.checked = !this.checked;

      } else {
        const actualWishlist = this.getWishlist.push(item);

        this.setWishlist(actualWishlist);

        localStorage.setItem('@wishlist', JSON.stringify(this.getWishlist));      

        console.log('add:', this.getWishlist);
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
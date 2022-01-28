export default {
  name: 'MnBreadcrumbs',
  data () {
    return {
      breadcrumbsList: [],
    }
  },
  watch: {
    '$route' () {
      this.updateBreadcrumb();
    }
  },
  created () {
    this.updateBreadcrumb();
  },
  methods: {
    navegateTo(key) {
      if(this.breadcrumbsList[key].link) {
        this.$router.push({name: this.breadcrumbsList[key].link });
      }
    },
    updateBreadcrumb() {
      this.breadcrumbsList = this.$route.meta.breadcrumbs;
    }
  }
}
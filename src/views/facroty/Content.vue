<template>
<div class="content">
  <div class="category">
    <div
    :class="{'category__item': true, 'category__item--active': productTab == item.tab}"
    v-for="item in categoryList"
    :key="item.id"
    @click='handleCategory(item.tab)'
    >
    {{item.name}}
    </div>
  </div>
  <div class="product">
    <router-link :to="`/products/product/${item._id}`" v-for="item in productList" :key="item.id">
    <div class="product__content">
    <img :src='item.imgUrl' alt="">
    <div class="product__item">
      <h4 class="product__item__name">{{item.name}}</h4>
      <p class="product__item__location">产地: {{item.location}}</p>
      <p class="product__item__price">价格: {{item.price}}</p>
    </div>
    </div>
    </router-link>
  </div>
  <Footer />
</div>

</template>

<script>
import { get } from '../../untils/request'
import Footer from '../home/Footer.vue'
export default {
  components: { Footer },
  data () {
    return {
      productList: [],
      productTab: 'all',
      categoryList: [
        {
          name: '全部商品',
          tab: 'all'
        },
        {
          name: '秒杀!',
          tab: 'seckill'
        }
      ]
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    handleCategory (tab) {
      this.getProductList(tab)
      this.productTab = tab
    },
    async getProductList (tab) {
      tab = tab || 'all'
      this.routeId = this.$route.params.id
      const { data: result } = await get(`api/factory/${this.routeId}/products/?tab=${tab}`)
      if (result.errno !== 0) return '获取商品信息失败'
      this.productList = result.data
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.content {
  position: absolute;
  top: 1.9rem;
  bottom: .5rem;
  right: 0;
  left: 0;
  display: flex;
}
.category {
  overflow-y: scroll;
  width: .76rem;
  background-color: $search-color;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-weight: 550;
    font-size: .13rem;
    color: $content-fontcolor;
    &--active {
      background-color: white;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  margin-left: .3rem;
  &__content {
    position: relative;
    display: flex;
    margin-top: .08rem;
  }
  &__item {
    font-size: .13rem;
    margin-left: .2rem;
    &__name {
      margin: 0;
      line-height: .2rem;
      color: $content-fontcolor;
    }
    &__location {
      font-size: .1rem;
      line-height: .16rem;
      color: $content-fontcolor;
    }
    &__price {
      font-size: .14rem;
      margin: 0;
      line-height: .2rem;
      color: $price-color;
      font-weight: 600;
    }
  }
  img {
    margin-top: .04rem;
    margin-left: .14rem;
    width: .68rem;
    height: .68rem;
  }
}
a {
  text-decoration: none;
}
</style>

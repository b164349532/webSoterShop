<template>
  <div class="product">
      <h3>商品列表</h3>
      <div class="search">
          <div class="iconfont search__icon">&#xe614;</div>
          <div class="search__input">
              <input type="text"  placeholder="请输入你想要搜索的商品">
          </div>
      </div>
      <div class="productList">
          <router-link :to="`/products/product/${item._id}`" v-for="item in productList" :key="item.id">
          <div class="productBox">
              <img :src="item.imgUrl" alt="">
              <p class="productBox__name">{{item.name}}</p>
              <p class="productBox__price">¥ {{item.price}}</p>
              <p class="productBox__location">产地: {{item.location}}</p>
          </div>
          </router-link>
      </div>
  </div>
 <Footer />
</template>

<script>
import { get } from '../../untils/request'
import Footer from '../home/Footer.vue'
export default {
  name: 'Product',
  components: { Footer },
  data () {
    return {
      productList: []
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    async getProductList () {
      const { data: result } = await get('api/product/list')
      this.productList = result.data
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
h3 {
    text-align: center;
}
a {
  text-decoration: none;
  color: $content-fontcolor;
}
.search {
    display: flex;
    align-items: center;
    height: .3rem;
    width: 3.5rem;
    border-radius: .1rem;
    margin-left: .14rem;
    background-color: $search-color;
    input {
      height: .2rem;
      width: 2.5rem;
      border: none;
      outline: none;
      background-color: $search-color;
      margin-left: .1rem;
    }
    &__icon {
        font-size: .2rem;
        margin-left: .1rem;
    }
}
.productList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: absolute;
    top: .9rem;
    left: 0;
    right: 0;
    padding-bottom: .6rem;
    background-color: $search-color;
}
.productBox {
    flex: 1;
    margin: .1rem .1rem 0 .1rem;
    width: 1.5rem;
    height: 2.5rem;
    background-color: #fff;
    img {
        width: 1.5rem;
        height: 1.8rem;
    }
    &__name {
        margin: 0;
        margin-left: .05rem;
        font-size: .16rem;
    }
    &__price {
        margin: 0;
        margin-top: .12rem;
        margin-left: .05rem;
        font-size: .14rem;
        color: $price-color;
        font-weight: 550;
    }
    &__location {
        margin: 0;
        margin-top: .05rem;
        margin-left: .05rem;
        color: gray;
    }
}

</style>

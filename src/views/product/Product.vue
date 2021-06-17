<template>
  <div class="product">
      <div class="productList">
          <div class="productBox">
              <img :src="product.imgUrl">
              <div class="priduct__content">
              <p class="productBox__price">¥ {{product.price}}</p>
              <p class="productBox__name">{{product.name}}</p>
              <p class="productBox__location">产地: {{product.location}}</p>
              </div>
          </div>
      </div>
      <div class="line"></div>
      <div class="productType">商品详情</div>
      <div class="product__bottom">
        <router-link to="/">
        <div class="product__bottom__home">
          <div class="iconfont">&#xe620;</div>
          <div class="product__bottom__text">首页</div>
        </div>
        </router-link>
        <router-link to="/cart">
        <div class="product__bottom__cart">
           <div class="iconfont">&#xe61d;</div>
           <div class="product__bottom__text">购物车</div>
        </div>
        </router-link>
        <router-link to="/cart">
        <div class="product__bottom__joincart" @click="addProduct()">加入购物车</div>
        </router-link>
        <router-link to="/orderconfirmation">
        <div class="product__bottom__buy" @click="addProduct()">立即购买</div>
        </router-link>
      </div>
  </div>
</template>

<script>
import { get, post } from '../../untils/request'
export default {
  name: 'Product',
  data () {
    return {
      product: {}
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      this.routeId = this.$route.params.id
      const { data: result } = await get(`/api/product/${this.routeId}`)
      this.product = result.data
    },
    async addProduct () {
      this.routeId = this.$route.params.id
      const { data: result } = await post(`/api/product/cart/${this.routeId}`)
      console.log(result)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.productBox {
    img {
        width: 100%;
        height: 3.2rem;
    }
    &__price {
        font-size: .2rem;
        color: $price-color;
        font-weight: 550;
    }
    &__name {
        font-size: .18rem;
        color: $content-fontcolor;
    }
    &__location {
        margin-top: .3rem;
        color: $content-fontcolor;
    }
}
.priduct__content {
    margin-top: .2rem;
    margin-left: .2rem;
}
.line {
    margin-top: .3rem;
    width: 100%;
    height: 0.1rem;
    background-color: #f1f1f1;;
}
.product__bottom {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    height: .4rem;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;
    &__home {
        padding-left: .25rem;
        text-align: center;
    }
    &__cart {
        text-align: center;
    }
    &__joincart {
        color: $price-color;
        font-size: .16rem;
        background-color: pink;
        height: .3rem;
        width: 1rem;
        line-height: .3rem;
        text-align: center;
    }
    &__buy {
        margin-right: .1rem;
        color: white;
        font-size: .16rem;
        background-color: $price-color;
        height: .3rem;
        width: 1rem;
        line-height: .3rem;
        text-align: center;
    }
}
.productType {
    font-size: .18rem;
    margin: .2rem 0 .2rem .1rem;
}
a {
    text-decoration: none;
    color: $content-fontcolor;
}
</style>

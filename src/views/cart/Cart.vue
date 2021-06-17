<template>
  <div class="cart">
    <h2>购物车</h2>
    <div class="cart__banner">
      <div class="cart__box" v-for="item in cartProduct" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="cart__content">
          <div class="cart__content__name">{{item.name}}</div>
          <span class="cart__content__price">¥ {{item.price}}</span>
          <button class="cart__content__delete" @click="handeleDelete(item.productId, index)">删除
          </button>
        </div>
      </div>
       <div class="cart__footer">
          <div class="cart__all">合计：{{totalPrice}} 元</div>
          <router-link to="/orderconfirmation">
          <div class="cart__footer__settle">结算</div>
          </router-link>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../views/home/Footer.vue'
import { get, post } from '../../untils/request'
export default {
  components: { Footer },
  data () {
    return {
      cartProduct: [],
      addressList: []
    }
  },
  computed: {
    totalPrice () {
      return this.cartProduct.reduce((sum, elem) => {
        sum += elem.price
        return sum
      }, 0)
    }
  },
  mounted () {
    this.getCartProduct()
    this.getAddress()
  },
  methods: {
    async getCartProduct () {
      const { data: result } = await get('/api/cart')
      this.cartProduct = result.data
    },
    async handeleDelete (productId) {
      const { data: result } = await post('/api/cart/delete', { productId })
      if (result.errno !== 0) return '删除失败'
      this.getCartProduct()
    },
    async getAddress () {
      const { data: result } = await get('/api/user/address')
      if (result.errno !== 0) return '获取地址失败'
      this.addressList = result.data
      console.log(this.addressList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
h2 {
  text-align: center;
}
.cart__banner {
  position: absolute;
  left: 0;
  right: 0;
  top: .5rem;
  bottom: 0;
  height: 5.2rem;
  margin-bottom: .1rem;
  box-sizing: border-box;
  background-color: $search-color;
  overflow: scroll;
}
.cart__box {
  margin: .2rem 0;
  padding: .1rem .2rem;
  display: flex;
  background-color: #fff;
  img {
    width: 1.1rem;
    height: 1.3rem;
  }
  .cart__content {
    margin-left: .2rem;
    &__name {
      font-size: .16rem;
    }
    &__price {
      display: inline-block;
      font-size: .18rem;
      color: $price-color;
      font-weight: 600;
      margin-top: .9rem;
    }
    &__delete {
      display: inline-block;
      border: 1px solid black;
      margin-left: 1rem;
      font-size: .16rem;
      text-align: center;
    }
  }
}
.cart__footer {
  position: fixed;
  bottom: .5rem;
  left: 0;
  right: 0;
  background-color: #fff;
  height: .5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: .16rem;
  &__settle {
    margin: 0 .3rem;
    width: .8rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    color: #fff;
    background-color: $price-color;
    font-weight: 0;
    border-radius: .5rem;
  }
  .cart__all {
    font-size: 0.18rem;
    font-weight: 600;
    color: $price-color;
  }
}
a {
  text-decoration: none;
}
</style>

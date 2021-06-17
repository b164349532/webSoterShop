<template>
  <div class="order">
    <div class="top">
      <div class="iconfont top__back" @click="handleBack">&#xe697;</div>
      <h3 class="top__confirmation">确认订单</h3>
    </div>
    <div class="orderBanner">
      <div class="location">
        <h3>收货地址</h3>
      <router-link to="/manageAddress">
      <div class="location__content">
        <div class="location__address">{{oneAddress.city}} {{oneAddress.departmentL}} {{oneAddress.houseNumber}}</div>
        <span class="iconfont location__icon">&#xe625;</span>
      </div>
      </router-link>
      <div class="change" v-if="change">请选择地址</div>
      <div class="location__message">
          <span>{{oneAddress.name}}</span>  <span>{{oneAddress.phone}}</span>
      </div>
      </div>
       <div class="products">
        <h3 class="products__title">商品订单</h3>
        <div class="products__list">
          <div class="products__box" v-for="item in cartProducrs" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div class="products__content">
              <div class="products__content__name">{{item.name}}</div>
              <span class="products__content__price">¥ {{item.price}}</span>
          </div>
         </div>
        </div>
       </div>
        <div class="cart__footer">
          <div class="cart__all">合计：{{totalPrice}} 元</div>
          <div class="cart__footer__settle">确认支付</div>
      </div>
    </div>
 </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '../../router/index'
const { get } = require('../../untils/request')
export default {
  data () {
    return {
      cartProducrs: [],
      oneAddress: {},
      change: true
    }
  },
  computed: {
    ...mapState(['currentAddress']),
    totalPrice () {
      return this.cartProducrs.reduce((sum, elem) => {
        sum += elem.price
        return sum
      }, 0)
    }
  },
  mounted () {
    this.getCartProducts()
    this.getOneAddress()
    this.changeAddress()
  },
  methods: {
    handleBack () {
      router.push('/cart')
    },
    async getCartProducts () {
      const { data: result } = await get('/api/cart')
      this.cartProducrs = result.data
    },
    async getOneAddress () {
      const { data: result } = await get(`/api/user/address/${this.currentAddress}`)
      if (result.errno !== 0) return '获取地址失败'
      this.oneAddress = result.data
    },
    changeAddress () {
      if (this.currentAddress !== 1) {
        this.change = false
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.top {
  display: flex;
  margin-top: 0.07rem;
  &__back {
    line-height: 0.44rem;
    font-size: 0.2rem;
    margin-left: 0.1rem;
  }
  &__confirmation {
    width: 100%;
    text-align: center;
    margin-right: 0.3rem;
  }
}
.orderBanner {
  position: absolute;
  top: 0.6rem;
  left: 0rem;
  right: 0rem;
  bottom: 0.1rem;
  background-color: #f5f5f5;
}
.location {
  margin: 0.2rem 0.1rem;
  background-color: #fff;
  border-radius: 0.05rem;
  &__content {
    display: flex;
    justify-content: space-between;
    margin-left: 0.12rem;
    line-height: 0.2rem;
  }
  &__address {
    font-size: 0.13rem;
  }
  h3 {
    display: inline-block;
    margin-left: 0.12rem;
    padding-top: 0.06rem;
  }
  &__message {
    margin-left: 0.12rem;
    font-size: 0.2rem;
    transform: scale(0.5);
    transform-origin: left;
    line-height: 0.2rem;
    color: gray;
    padding-bottom: 0.1rem;
  }
  &__icon {
    display: inline-block;
    font-size: 0.12rem;
    margin-right: 0.1rem;
  }
}
.products {
  height: 3.5rem;
  width: 3.5rem;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 0.05rem;
  overflow: scroll;
  &__title {
    display: inline-block;
    margin-top: .12rem;
    margin-left: .1rem;
  }
}
.products__box {
  display: flex;
  position: relative;
  margin: .1rem 0 .05rem .13rem;
  img {
    width: .7rem;
    height: .7rem;
  }
}
.products__content {
  margin-left: .1rem;
  &__name {
    font-size: .13rem;
  }
  &__price {
    position: absolute;
    left: 2.7rem;
    bottom: 0rem;
    font-size: .14rem;
    color: $price-color;
  }
}
.cart__footer {
  position: fixed;
  bottom: 0rem;
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
  color: black
}
.change {
  display: black;
  font-size: .16rem;
  margin-left: .1rem;
  padding-bottom: .2rem;
  box-sizing: border-box;
}
</style>

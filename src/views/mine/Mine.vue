<template>
  <div class="mine">
    <div class="mine__message">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F28%2F20190528143150_fETNW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626453827&t=da9cbf0b93b9275b25a7bb2d2fe6b08e"
        alt=""
      />
      <div class="mine__message__username">用户名:{{user.username}}</div>
      <div class="mine__message__layout"><button @click="handleLayout">注销</button></div>
    </div>
    <div class="mine__content">
      <div>
        <router-link to="/manageAddress">
        <span class="mine__content__address">
          <span class="iconfont">&#xe619; 我的地址</span>
          <span class="iconfont mine__content__icon">&#xe625;</span>
        </span>
        </router-link>
      </div>
      <div>
        <router-link to="/cart">
        <span class="mine__content__cart">
          <span class="iconfont">&#xe61d; 我的购物车</span>
          <span class="iconfont mine__content__icon">&#xe625;</span>
        </span>
        </router-link>
      </div>
      <div>
        <span class="mine__content__help">
          <span class="iconfont">&#xe641; 客服与帮助</span>
          <span class="iconfont mine__content__icon">&#xe625;</span>
        </span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../home/Footer.vue'
const { get } = require('../../untils/request')
export default {
  components: { Footer },
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const { data: result } = await get('/api/user')
      this.user = result.data
      console.log(this.user)
    },
    async handleLayout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.mine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  &__message {
    position: relative;
    height: 2rem;
    width: 3.3rem;
    border-radius: 0.2rem;
    margin: 1rem auto;
    background-color: #fff;
    img {
      position: absolute;
      top: -0.5rem;
      left: 1.15rem;
      height: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    &__username {
      font-size: 0.16rem;
      text-align: center;
      line-height: 2rem;
    }
    button {
      position: absolute;
      bottom: .4rem;
      left: 1.22rem;
      width: .7rem;
      height: .3rem;
      background-color: $price-color;
      border-radius: .1rem;
      outline: none;
      border: none;
      color: #fff;
    }
  }
  &__content {
    background-color: #fff;
    font-size: 0.14rem;
    width: 3.3rem;
    padding: 0.1rem 0 0.1rem 0;
    margin: 0 auto;
    border-radius: 0.2rem;
    &__address {
      display: flex;
      justify-content: space-between;
    }
    &__cart {
      display: flex;
      justify-content: space-between;
    }
    &__help {
      display: flex;
      justify-content: space-between;
    }
    &__icon {
      margin-right: 0.2rem;
    }
  }
}

span {
  line-height: 0.3rem;
  margin-left: 0.2rem;
  font-size: 0.14rem;
}
a {
  text-decoration: none;
  color: black;
}
</style>

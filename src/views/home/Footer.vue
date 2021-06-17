<template>
  <div class="footer">
    <div v-for="(item) in footerList" :key="item.index"
    class="footer__item">
      <router-link :to="item.path">
      <div class="iconfont" v-html="item.icon" />
      <div class="footer__title">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup () {
    const footerList = [
      { icon: '&#xe620;', text: '首页', path: '/' },
      { icon: '&#xe61e;', text: '商品', path: '/products' },
      { icon: '&#xe61d;', text: '购物车', path: '/cart' },
      { icon: '&#xe662;', text: '我的', path: '/mine' }
    ]
    return { footerList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #000;
  background-color: #fff;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4fc;
    }
  }
  .iconfont {
    margin: 0.07rem 0 0.01rem 0;
    font-size: 0.2rem;
  }
  &__title {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
  a {
    text-decoration: none;
    color: $content-fontcolor;
  }
}
</style>

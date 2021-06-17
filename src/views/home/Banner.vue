<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    和平路邮政动力局
    <span class="iconfont bell__icon">&#xe664;</span>
  </div>
  <div class="search">
    <span class="iconfont search__icon">&#xe614;</span>
    邮政折扣商品
  </div>
  <div class="banner">
    <img src="../../assets/swiper_img/guntong1.jpg" alt="" class="banner__img" />
  </div>
  <div class="gap"></div>
  <div class="content">
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/kuaidi.jpg" alt="" />
      <p class="content__text">快递分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/huanxing.jpg" alt="" />
      <p>环型分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/shengjiang.jpg" alt="" />
      <p>升降型分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/shusong.jpg" alt="" />
      <p>输送型分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/kuaidi.jpg" alt="" />
      <p>快递分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/huanxing.jpg" alt="" />
      <p>环形分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/shengjiang.jpg" alt="" />
      <p>升降型分拣机</p>
      </router-link>
    </div>
    <div class="content__list">
      <router-link to="/products">
      <img src="../../assets/content_img/shusong.jpg" alt="" />
      <p>输送型分拣机</p>
      </router-link>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {

    }
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.33rem 0.16rem 0;
  font-size: 0.15rem;
  @include ellipsis;
}
.position .position__icon {
  position: relative;
  top: 0.01rem;
  font-size: 0.2rem;
}
.position .bell__icon {
  position: absolute;
  right: 0.1rem;
  top: 0.165rem;
  font-size: 0.2rem;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .search__icon {
    padding: 0 0.12rem 0 0.16rem;
    font-size: 0.16rem;
  }
}
.banner {
  &__img {
    width: 100%;
    height: 1.6rem;
    margin-bottom: 0.14rem;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin-top: 0.1rem;
  &__list {
    width: 20%;
    margin: 0.01rem 0.05rem 0 0.05rem;
    text-align: center;
    font-size: 0.12rem;
  }
  p {
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
.content__list img {
  flex: 1;
  width: 0.6rem;
  height: 0.6rem;
}
.gap {
  height: 0.14rem;
  background-color: #f1f1f1;
  margin: 0 -0.18rem;
}
</style>

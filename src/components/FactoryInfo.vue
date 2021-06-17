<template>
<div class="Factory">
  <div class="Factory__list">
    <div class="Factory__img">
      <img :src="item.imgUrl" alt="" />
    </div>
    <div class="Factory__list__text">
    <div class="Factory__list__name">{{item.name}}</div>
    <div class="Factory__list__content">
      <span class="Factory__list__sale">月售: {{item.sales}}</span>
      <span>1100元起</span>
    </div>
    <div class="Factory__list__solgan">
     {{item.slogan}}
    </div>
  </div>
  </div>
  <div class="line"></div>
</div>
</template>

<script>
export default {
  name: 'FactoryInfo',
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
@import "../style/mixins.scss";
.Factory {
  margin-bottom: 0.2rem;
  &__title {
    margin: 0.1rem 0 0.02rem 0;
    color: $content-fontcolor;
  }
  &__list {
    display: flex;
    margin: 0.2rem 0 0.2rem 0;
    &__text {
      flex: 1;
    }
    &__name {
      margin: 0.1rem 0;
      line-height: 0.22rem;
      font-size: 0.16rem;
      font-weight: 600;
      color: $content-fontcolor;
    }
    &__content {
      line-height: 0.22rem;
      margin-bottom: 0.1rem;
      font-size: 0.12rem;
      margin-right: 0.16rem;
      color: $content-fontcolor;
    }
    &__solgan {
      width: 2rem;
      font-size: 0.12rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sale {
      color: red;
      margin-right: 0.12rem;
    }
  }
  &__img {
    margin-right: 0.3rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .line {
    height: 0.02rem;
    background-color: #f1f1f1;
    margin: 0 -0.18rem;
  }
}
</style>

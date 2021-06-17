<template>
<div class="factoryList">
  <div class="search">
    <span class="iconfont search__back" @click="handleBack">&#xe697;</span>
    <div class="search__content">
      <span class="iconfont search__content__icon">&#xe614;</span>
      <span class="search__content__input"><input type="text" placeholder="输入商品名称"></span>
    </div>
  </div>
  <FactoryInfo :item='factoryItem' />
  <Content />
</div>
</template>

<script>
import { get } from '../../untils/request'
import router from '../../router/index'
import FactoryInfo from '../../components/FactoryInfo.vue'
import Content from '../../views/facroty/Content.vue'
export default {
  name: 'Factory',
  components: { FactoryInfo, Content },
  data () {
    return {
      factoryItem: {}
    }
  },
  mounted () {
    this.getFactoryItem()
  },
  methods: {
    handleBack () {
      router.back()
    },
    async getFactoryItem () {
      this.routeId = this.$route.params.id
      const { data: result } = await get(`api/factory/${this.routeId}`)
      this.factoryItem = result.data
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.factoryList {
  padding: 0 .18rem;
  box-sizing: border-box;
}
.search {
  margin-top: .2rem;
  display: flex;
  justify-content: space-between;
  &__back {
    font-size: .2rem;
    font-weight: 600;
    margin-top: .024rem;
  }
  &__content {
    width: 3rem;
    height: 0.27rem;
    border-radius: .6rem;
    background-color: $search-color;
    &__icon {
      font-size: .16rem;
      margin: 0 .08rem 0 .15rem;
      line-height: .27rem;
    }
    input {
      height: .19rem;
      width: 2.5rem;
      border: none;
      outline: none;
      background-color: $search-color;
    }
  }
}
</style>

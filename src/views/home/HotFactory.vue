<template>
<div class="hotFactory">
  <h3>厂家列表</h3>
 <router-link :to="`/factory/${item._id}`" v-for="item in factoryList" :key="item.name">
   <FactoryInfo :item="item"/>
 </router-link>
</div>
</template>

<script>
import FactoryInfo from '../../components/FactoryInfo.vue'
import { get } from '../../untils/request'
export default {
  name: 'HotFactory',
  components: { FactoryInfo },
  data () {
    return {
      factoryList: []
    }
  },
  mounted () {
    this.getHotFactoryList()
  },
  methods: {
    async getHotFactoryList () {
      const result = await get('/api/factory/list')
      console.log(result)
      if (result.data.errno !== 0) return '获取厂家列表失败'
      this.factoryList = result.data.data
      console.log(this.factoryList)
    }
  }
}

</script>

<style lang='scss' scoped>
.hotFactory {
  margin-bottom: .5rem;
}
a {
  text-decoration: none;
}
</style>

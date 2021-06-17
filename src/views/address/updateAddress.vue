<template>
  <div class="updateAddress">
      <div class="updateAddress__title">
        <div class="iconfont updateAddress__title__icon" @click="handleBack">&#xe697;</div>
        <div>更新收货地址</div>
         <router-link to="/manageAddress">
          <div @click="updateOneAddress">保存</div>
         </router-link>
      </div>
      <div class="updateAddress__content">
        <div class="updateAddress__banner">
          <div class="updateAddress__banner__text">所在城市：<input type="text" placeholder="如北京市" v-model="updateAddress.city"></div>
          <div class="updateAddress__banner__text">小区/街道/学校：<input type="text" placeholder="如理工大学实验园" v-model="updateAddress.departmentL"></div>
          <div class="updateAddress__banner__text">楼号-门牌号：<input type="text" placeholder="A号B单元xxxx" v-model="updateAddress.houseNumber"></div>
          <div class="updateAddress__banner__text">收货人：<input type="text" placeholder="请填写收货人姓名" v-model="updateAddress.name"></div>
          <div class="updateAddress__banner__text">联系电话：<input type="number" placeholder="请填写收货人电话" v-model="updateAddress.phone"></div>
        </div>
      </div>
  </div>
</template>

<script>
import router from '../../router/index'
const { get, post } = require('../../untils/request')
export default {
  data () {
    return {
      updateAddress: {
        city: '',
        departmentL: '',
        houseNumber: '',
        name: '',
        phone: ''
      },
      address: {}
    }
  },
  mounted () {
    this.getAddress()
  },
  methods: {
    handleBack () {
      router.back()
    },
    async getAddress () {
      this.routeId = this.$route.params.id
      console.log(this.routeId)
      const { data: result } = await get(`/api/user/address/${this.routeId}`)
      this.address = result.data
      this.updateAddress = this.address
    },
    async updateOneAddress () {
      this.routeId = this.$route.params.id
      const { data: result } = await post(`/api/user/address/${this.routeId}`, this.updateAddress)
      console.log(result)
    }
  }

}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.updateAddress__title {
  display: flex;
  justify-content:space-around;
  line-height: .5rem;
  font-size: .14rem;
  &__icon {
    font-size: .2rem;
  }
}
.updateAddress__content {
  position: absolute;
  top: .51rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $search-color;
}
.updateAddress__banner {
  margin-top: .1rem;
  padding-left: .2rem;
  background-color: #fff;
  &__text {
    font-size: .14rem;
    line-height: .45rem;
    border-bottom: 1px solid $search-color;
  }
  input {
    line-height: .25rem;
    width: 2.2rem;
    border: none;
    outline: none;
  }
}
a {
  text-decoration: none;
  color: black;
}
</style>

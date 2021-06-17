<template>
  <div class="newAddress">
      <div class="buildAddress__title">
        <div class="iconfont buildAddress__title__icon" @click="handleBack">&#xe697;</div>
        <div>新建收货地址</div>
          <div @click="addNewAddress">保存</div>
      </div>
      <div class="buildAddress__content">
        <div class="buildAddress__banner">
          <div class="buildAddress__banner__text">所在城市：<input type="text" placeholder="如北京市" v-model="newAddress.city"></div>
          <div class="buildAddress__banner__text">小区/街道/学校：<input type="text" placeholder="如理工大学实验园" v-model="newAddress.departmentL"></div>
          <div class="buildAddress__banner__text">楼号-门牌号：<input type="text" placeholder="A号B单元xxxx" v-model="newAddress.houseNumber"></div>
          <div class="buildAddress__banner__text">收货人：<input type="text" placeholder="请填写收货人姓名" v-model="newAddress.name"></div>
          <div class="buildAddress__banner__text">联系电话：<input type="number" placeholder="请填写收货人电话" v-model="newAddress.phone"></div>
        </div>
      </div>
  </div>
</template>

<script>
import router from '../../router/index'
const { post } = require('../../untils/request')
export default {
  data () {
    return {
      newAddress: {
        city: '',
        departmentL: '',
        houseNumber: '',
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    handleBack () {
      router.back()
    },
    async addNewAddress () {
      if (this.newAddress.name === '') return alert('必须输入姓名')
      this.$router.push('/manageAddress')
      const { data: result } = await post('/api/user/address', this.newAddress)
      if (result.errno !== 0) return '创建失败'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.buildAddress__title {
  display: flex;
  justify-content:space-around;
  line-height: .5rem;
  font-size: .14rem;
  &__icon {
    font-size: .2rem;
  }
}
.buildAddress__content {
  position: absolute;
  top: .51rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $search-color;
}
.buildAddress__banner {
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

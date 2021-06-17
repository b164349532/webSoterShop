<template>
  <div class="manageAddress">
      <div class="manage__title">
        <div class="iconfont manage__title__icon" @click="handleBack">&#xe697;</div>
        <div>管理收货地址</div>
        <router-link to="/build">
        <div @click="addNewAddress">新建</div>
        </router-link>
      </div>
      <div class="manage__banner">
        <div class="manage__banner__myAddress">我的收货地址</div>
        <div class="manage__banner__message" v-for="item in addressList" :key="item._id">
            <span class="manage__banner__message__my" @click="enterAddress">{{item.name}}</span>&nbsp;&nbsp;&nbsp;<span class="manage__banner__message__my">{{item.phone}}</span>
        <div class="manage__banner__address">
            <div class="manage__banner__address__location" @click="handleSelect(item._id)">
            {{item.city}} {{item.departmentL}} {{item.houseNumber}}
            </div>
          <router-link :to='`/update/${item._id}`'>
          <div class="iconfont manage__banner__address__icon">&#xe625;</div>
          </router-link>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import router from '../../router/index'
import { mapMutations } from 'vuex'
const { get } = require('../../untils/request')
export default {
  name: 'ManageAddress',
  data () {
    return {
      addressList: []
    }
  },
  mounted () {
    this.getAddressList()
  },
  methods: {
    ...mapMutations({
      setCurrentAddress: 'setCurrentAddress'
    }),
    handleBack () {
      router.back()
    },
    async getAddressList () {
      const { data: result } = await get('/api/user/address')
      if (result.errno !== 0) return '获取地址失败'
      this.addressList = result.data
    },
    handleSelect (id) {
      this.setCurrentAddress(id)
      this.$router.push('/orderconfirmation')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.manage__title {
  display: flex;
  justify-content:space-around;
  line-height: .5rem;
  font-size: .14rem;
  &__icon {
    font-size: .2rem;
  }
}
.manage__banner {
    position: absolute;
    top: .45rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $search-color;
    &__myAddress {
    margin-top: .1rem;
    font-size: .16rem;
    margin-left: .1rem;
    }
    &__message {
       background-color: #fff;
       padding: .1rem .2rem .1rem .2rem;
       width: 3rem;
       margin: .2rem auto;
       &__my {
           line-height: .3rem;
           color: gray;
           font-size: .13rem;
       }
    }
    &__address {
       display: flex;
       font-size: .14rem;
       &__location {
        margin-top: .1rem;
        padding-bottom: .05rem;
        line-height: .2rem;
        width: 2.2rem;
       }
       &__icon {
        margin-left: .5rem;
       }
    }
}
a {
    text-decoration: none;
    color: black;
}
</style>

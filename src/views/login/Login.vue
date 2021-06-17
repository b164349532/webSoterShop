<template>
  <div class="login">
  <div class="wrapper">
      <div class="wrapper__input">
          <input type="text"
           class="wrapper__input__content"
           placeholder="请输入用户名"
           v-model="loginFrom.username"
          >
      </div>
      <div class="wrapper__input">
          <input
          type="password"
          class="wrapper__input__content"
          placeholder="请输入密码"
          v-model="loginFrom.password"
          autocomplete="new-password"
          >
      </div>
      <div>
          <button class="wrapper__login-button" @click="handleLogin">登录</button>
          <router-link :to='{name: "Register"}' style="text-decoration: none;">
          <div class="wrapper__register-button">立即注册</div>
          </router-link>
      </div>
  </div>
  <Toast v-if="toast.showToast" :message="toast.toastMessage"/>
</div>
</template>

<script>
import { post } from '../../untils/request'
import router from '../../router/index'
import Toast from '../../components/Toast'
import axios from 'axios'
export default {
  name: 'Login',
  components: { Toast },
  data () {
    return {
      loginFrom: [{
        username: '',
        password: ''
      }],
      toast: {
        showToast: false,
        toastMessage: ''
      }
    }
  },
  mounted () {
    axios.interceptors.request.use(config => {
      const token = localStorage.getItem('token')
      console.log('123')
      console.log(token)
      if (token) {
        config.headers.authorization = token
      }
      return config
    })
  },
  methods: {
    async handleLogin () {
      const { data: result } = await post('api/user/login', {
        username: this.loginFrom.username,
        password: this.loginFrom.password
      })
      if (result.errno !== 0) {
        this.toast.showToast = true
        this.toast.toastMessage = '账号或密码错误'
        setTimeout(() => {
          this.toast.showToast = false
          this.toast.toastMessage = ''
        }, 2000)
      } else {
        if (result.data.token) {
          localStorage.setItem('token', result.data.token)
        }
        router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-100%);
    &__input {
        height: .4rem;
        width: 2.9rem;
        margin: .19rem 0;
        padding: 0 .13rem;
        background-color: $search-color;
        border: 1px solid rgba($color: #000000, $alpha: 0.2);
        border-radius: .06rem;
        &__content {
        line-height: .33rem;
        width: 100%;
        background-color: $search-color;
        border: none;
        border-radius: .06rem;
        outline: none;
        &::placeholder {
            color: rgba($color: #000000, $alpha: 0.3);
            font-size: .12rem;
        }
    }
    }
.wrapper__login-button {
    background-color: $bg-color;
    box-shadow: 0 .04rem .08rem 0 rgba($color: $bg-color, $alpha: 0.32);
    border-radius: .04rem;
    border: none;
    height: .43rem;
    width: 100%;
    color: $search-color;
    font-size: .12rem;
}
.wrapper__register-button {
    border: none;
    background-color: none;
    text-align: center;
    padding-top: .14rem;
    color: gray;
}
}
</style>

<template>
  <div class="register">
  <div class="wrapper">
      <div class="wrapper__input">
          <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="registerFrom.username">
      </div>
      <div class="wrapper__input">
          <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="registerFrom.password">
      </div>
      <div class="wrapper__input">
          <input type="password" class="wrapper__input__content" placeholder="请再次输入密码" v-model="registerFrom.checkPassword">
      </div>
      <div>
          <button class="wrapper__register-button" @click="handleRegister">立即注册</button>
      </div>
      <router-link :to='{name: "Login"}' class="loginLink" style="text-decoration: none;">
      <div class="login">已有账号点击登录</div>
      </router-link>
  </div>
  <Toast v-if="toast.toastShow" :message="toast.toastMessage"/>
</div>
</template>

<script>
import { post } from '../../untils/request'
import router from '../../router/index'
import Toast from '../../components/Toast'
export default {
  name: 'Register',
  components: { Toast },
  data () {
    return {
      registerFrom: {
        username: '',
        password: '',
        checkPassword: ''
      },
      toast: {
        toastShow: false,
        toastMessage: ''
      }
    }
  },
  methods: {
    async handleRegister () {
      if (this.registerFrom.username === '' || this.registerFrom.password === '') {
        this.toast.toastShow = true
        this.toast.toastMessage = '请输入用户名或密码'
        return
      }
      if (this.registerFrom.password !== this.registerFrom.checkPassword) {
        this.toast.toastShow = true
        this.toast.toastMessage = '两次密码输入不一致'
        setTimeout(() => {
          this.toast.toastShow = false
        }, 2000)
        return
      }
      const result = await post('api/user/register', this.registerFrom)
      if (result.data.errno !== 0) {
        this.toast.toastShow = true
        this.toast.toastMessage = '用户名已存在'
        setTimeout(() => {
          this.toast.toastShow = false
        }, 1500)
      } else {
        router.push('/login')
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
    transform: translate(-50%,-80%);
    &__input {
        height: .45rem;
        width: 2.9rem;
        margin: .19rem 0;
        padding: 0 .13rem;
        background-color: $search-color;
        border: 1px solid rgba($color: #000000, $alpha: 0.2);
        border-radius: .06rem;
        &__content {
        line-height: .38rem;
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
.wrapper__register-button {
    background-color: $bg-color;
    box-shadow: 0 .04rem .08rem 0 rgba($color: $bg-color, $alpha: 0.32);
    border-radius: .04rem;
    border: none;
    height: .43rem;
    width: 100%;
    color: $search-color;
    font-size: .12rem;
}
.login {
    margin-top: .14rem;
    text-align: center;
    color: gray;
}
}
</style>

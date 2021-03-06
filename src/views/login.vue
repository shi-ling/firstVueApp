<template>
  <div id="app">
    <el-card class="login-form-layout">
      <el-form autocomplete="on" :model="loginForm" ref="loginForm" label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">mall-admin-web-2</h2>
        <!--
                Form-Item中的prop属性设置需要校验的字段名
                el-form-item元素的prop属性绑定字段名username，表单验证时，
                就会验证el-input元素绑定的变量loginForm.username的值是否符合验证规则
        -->
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.name" autocomplete="on" placeholder="请输入用户名">

          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                    autocomplete="on" placeholder="请输入密码">

            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button style="width: 100%" type="primary" :loading="loading" @click.native.prevent="handleLogin">登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  /* export default{}又是什么呢？
ES6 Module语法中的命令，是为了方便 使用import命令时必须要知道所加载的变量名或函数名，否则无法加载的问题。
export default命令并不是在每个文件中都是必须的。它的作用只是用于导出模块，在别的模块需要调用这个模块的时候，
可以通过import命令引入使用的。
*/
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          name: "admin",
          password: "123456"
        },
        loading: false,
        pwdType: "password",
      };
    },
    methods: {
      showPwd() {
        if (this.pwdType === "password") {
          this.pwdType = "";
        } else {
          this.pwdType = "password";
        }
      },
      handleLogin() {
        //GET
        this.$ajax({
          url: 'http://localhost:8089/user/onLogin',
          method: 'post',
          data: {
            name: username,
            password: password
          },
        })
          .then(response => {
            let _data = response.data;
            alert("hello," + _data.username);
          }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409eff;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409eff;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>

<template>
  <div class="login_content">
    <div class="login_box">
      <div class="login_avator">
        <img src="../assets/logo.png" />
      </div>
      <el-form
        ref="loginFormRef"
        width="80px"
        :model="loginForm"
        :rules="rules"
        class="login_form"
      >
        <el-form-item label-width="0" prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            clearable
            prefix-icon="el-icon-eleme"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">Login</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) return
        if (valid) {
          const result = this.$http
            .get('article/search?keyword=频道', this.loginForm)
            .then((res) => {
              if (res.data.code == 200) {
                this.$message.success('登录成功')
                window.sessionStorage.setItem('token', res.data.code)
                this.$router.replace('/home')
              } else {
                this.$message.error('登录失败')
              }
            })
            .catch((err) => {
              console.log(err)
              this.$message.error('登录异常')
            })
          console.log('ok')
          console.log(result)
        }
      })
    },
  },
}
</script>
<style scoped>
.login_content {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_avator {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 1px solid #2d65b9;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  margin: -75px auto;
  background-color: #fff;
}

.login_avator img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #42b983;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>

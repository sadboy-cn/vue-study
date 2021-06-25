<template>
  <el-container class="home_content">
    <el-header>
      <div><img class="logo" src="../assets/logo.png" /><span>webx</span></div>
      <el-button type="danger" @click="exit">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          background-color="#d7f1e6"
          text-color="#613e5a"
          active-text-color="#03c2e6"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1"
              ><template slot="title">
                <i class="el-icon-eleme"></i>
                <span>导航一</span>
              </template></el-menu-item
            >
            <el-menu-item index="1-2"
              ><template slot="title">
                <i class="el-icon-video-camera-solid"></i>
                <span>导航一</span>
              </template></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    this.initMenu()
  },
  methods: {
    exit() {
      window.sessionStorage.clear()
      this.$router.replace('/login')
    },
    initMenu() {
      console.log('initMenu')
    },
  },
}
</script>

<style>
.el-header {
  background-color: #bbe6d6;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
}

.el-header div {
  display: flex;
  align-items: center;
}

.el-header div span {
  margin-left: 5px;
}

.el-header .logo {
  height: 50px;
}

.el-aside {
  background-color: #e4f5ef;
}

.home_content {
  height: 100%;
}
</style>

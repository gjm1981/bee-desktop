<template>
  <div id="app">
    <div class="top-nav">
      <el-menu
              default-active="/"
              mode="horizontal"
              :router="true"
      >
        <el-menu-item>
          <img style="height:35px;" src="../src/assets/swarm.svg">
        </el-menu-item>
        <el-menu-item index="/">Files</el-menu-item>
        <el-menu-item index="/status">Status</el-menu-item>
        <el-menu-item index="/settings">Settings</el-menu-item>
      </el-menu>
    </div>
    <div style="margin: 15px">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  body{
    margin:0px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .top-nav{
    padding: 10px 0;

    .logo{
      margin:10px;
    }
  }

  .el-icon{
    margin-right:5px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

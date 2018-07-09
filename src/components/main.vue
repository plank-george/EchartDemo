<template>
  <el-container  style='height:100%'>
    <el-header>
      <div class="logo">
        <img src="@/images/jinmaologo.png" style="height: 46px">
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal">
        <el-menu-item index="1" style="font-weight:800"><router-link to="home" >首页</router-link></el-menu-item>
        <el-menu-item index="2" style="font-weight:800"><router-link to="list">投资项目</router-link></el-menu-item>
      </el-menu>
      <el-dropdown @command="logout()" id="top-name">
        <span class="el-dropdown-link">
            {{$cookies.get('UserName')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="" command="a" id="top-out">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
     <router-view @setActiveIndex="setActiveIndex" :activeIndex="activeIndex"/>

  </el-container>
</template>

<style scope>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

div.log0 {
  width: 1130px;
  margin: 0, auto;
}

a .logo {
  float: left;
  margin-top: 15px;
}

.el-header {
  width: 100%;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  box-shadow: 0 10px 24px 0 rgba(135,135,135,.1);
  z-index: 999;
}

.logo {
  width: 15%;
  height: 60px;
  float: left;
  display: flex;
}

.logo img {
    width: 180px;
    margin: auto;
    float: left;
    padding-top: 5px;
}

.el-menu-top {
  width: 75%;
  float: left;
}

.el-menu-top .el-menu-item {
  width: 150px;
}

.el-menu-top .el-menu-item {
  width: 150px;
}
.el-menu-top .el-menu-item a {
  text-decoration: none;
  font-size: 18px;
  font-family: "微软雅黑";
  color: #333;
  display: block;
}

.el-dropdown {
  width: 10%;
}

.el-dropdown-menu {
  margin-right: 3%;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: none;
}

.el-menu-item.is-active,.el-menu-item.is-active:hover{
    color: #0072ff !important;
    background: #f2f3f6;
    border-bottom: 2px solid transparent;
}
.el-menu-top .el-menu-item a{
  font-size: 16px;
}
.el-menu-top .el-menu-item.is-active:hover{
  background: #f2f3f6 !important;
}
.el-menu-top .el-menu-item.is-active a{
  color: #0072ff;
}
.el-menu--horizontal>.el-menu-item.is-active{
  color: #0072ff !important;
    background: #f2f3f6;
    border-bottom: 2px solid transparent;
}

/*导航栏下部蓝色下划线*/

/*.el-menu--horizontal {
  border-bottom: none;
}
*/
.el-row .el-button-button-top {
  width: 130px;
  height: 40px;
  float: right;
  background-color: #07448e;
  margin-right: 4%;
}

</style>

<script>
import listservice from '../services/dataservice'
export default {
  methods: {
    logout () {
      var v = this
      listservice.dataRouter('logout').then(function () {
        v.$cookies.remove('UserId')
        v.$cookies.remove('UserName')
        v.$router.push('login')
      })
    },
    setActiveIndex (index) {
      this.activeIndex = index
    }
  },
  data () {
    return {
      activeIndex: '1',
      username: this.$cookies.get('UserName')
    }
  },
  created () {
    if (this.$route.meta.active) { this.activeIndex = this.$route.meta.active }
  }

}

</script>

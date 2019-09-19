

<template>
<div>
  <el-header>后台管理</el-header>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-tools"></i>展开菜单</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="tap1()">展示数据</el-menu-item>
            <el-menu-item index="1-2" @click="tap2()">添加数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

<router-view></router-view>

  </el-container>

</div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Home",
        methods: {
            tap1(){
                this.$router.push('/show')
            },
            tap2(){
                this.$router.push('/adddata')
            },

        },
        data() {
            return {

            }
        },

    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-table img{
    width: 100px;
    height: 100px;
  }
</style>

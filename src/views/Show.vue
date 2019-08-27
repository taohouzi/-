<template>
<div>
  <el-main>
    <el-table
      :fit="true"
      :border="true"
      :stripe="true"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        :index="indexMethod">
      </el-table-column>

      <el-table-column
        label="名字"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.pname}}</span>
        </template>
      </el-table-column>


      <el-table-column
        label="图片"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.pimg" alt="" style="margin-left: 10px">
        </template>
      </el-table-column>

      <el-table-column
        label="描述"
        width="500">
        <template slot-scope="scope">
          <p style="margin-left: 10px">{{ scope.row.pdesc }}</p>
        </template>
      </el-table-column>

      <el-table-column
        label="价格"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.pprice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.pid)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Home",
        methods: {
            handleEdit(id) {
                console.log(id)
                this.$router.push('revise/'+id)
            },
            handleDelete(key, keyPath) {
                axios({
                    url:'http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php',
                    params:{uid:20620,pid:keyPath.pid}
                }).then((data)=>{
                    alert('删除数据成功')
                    axios({
                        url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
                        params:{uid:20620}
                    }).then((data)=>{
                        this.tableData=data.data.data
                        console.log(data)
                    })
                })
            },
            indexMethod(index) {
                return index * 1;
            }
        },
        data() {
            return {
                show:'true',
                tableData:[]
            }
        },
        mounted() {
            axios({
                url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
                params:{uid:20620}
            }).then((data)=>{
                this.tableData=data.data.data
            })
        }

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

<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="商品名字">
        <el-input v-model="formLabelAlign.pname" style="width: 1000px"></el-input>
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input v-model="formLabelAlign.pdesc"></el-input>
      </el-form-item>
      <el-form-item label="图片路径">
        <el-input v-model="formLabelAlign.pimg"></el-input>
      </el-form-item>
      <el-form-item label="价格-元">
        <el-input v-model="formLabelAlign.pprice"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form>



  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Revise",
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    pname: '',
                    pdesc: '',
                    pprice: '',
                    pimg:'',
                }
            }
        },
        methods:{
            onSubmit() {
                let _this=this.formLabelAlign
                axios({
                    url:' http://jx.xuzhixiang.top/ap/api/goods/goods-update.php',
                    params:{
                        uid:'',
                        pid:this.$route.params.id,
                        pname:_this.pname,
                        pdesc:_this.pdesc,
                        pprice: _this.pprice,
                        pimg:_this.pimg,
                    }
                }).then((data)=>{
                    console.log(data)
                    alert('修改成功')
                })

            }
        }


    }
</script>

<style scoped>

</style>

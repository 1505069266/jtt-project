<template>
  <div>
        <div class="search">
          <div class="searchwindow">
            <i class="iconfont icon-Magnifier"></i>
            <input type="text" value="京推推精选">
            <i class="iconfont icon-shuaxin1" @click="go"></i>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: "shoplist",
    data() {
      return{

      }
    },
    methods:{
      go(){
        this.$router.push('seek')
      }
    }
  }
</script>

<style scoped>
  .sort ul{
    width: 660px;
    height: 25px;
  }
  .sort li{
    float: left;
    margin: 0 10px;
    padding-bottom: 5px;
  }
  .productlist li{
    float: left;
    font-size: 13px;
    /*margin-right: 13px;*/
    color:#777777;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 13px;
    border-left: 1px solid #777777;
  }
  .productlist li:nth-child(1){
    padding-left: 0;
    border: 0;
  }
  .productlist ul{
    margin-left: 9px;
  }
  .ipt input{
    font-size: 12px;
    color:#333333;
    margin-left: 10px;
    width: 200px;
  }
  .icon-shuaxin1{
    font-size: 18px;
    font-weight: 600;
    color:#999999;
  }
  .icon-Magnifier{
    color:#999999;
    font-weight: 600;
    margin-left: 12px;
    font-size: 16px;
  }
  .search input{
    margin-left: 10px;
    font-size: 14px;
    color:#333333;
    width: 280px;
  }
  .searchwindow{
    width: 100%;
    height: 100%;
    border:1px solid #E6E6E6;
    display: flex;
    align-items: center;
    background: white;
    position: relative;
  }
  .search{
    width: 100%;
    height: 58px;
    padding: 9px 12px;
  }
</style>

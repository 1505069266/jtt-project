<template>
  <div>
    <div ref="warpper" class="topall">
      <div>
        <searchtop></searchtop>
        <classify></classify>
        <sortgoods></sortgoods>
        <goods v-for="(item,index) in goods" :key="index"></goods>
      </div>
    </div>
  <footter></footter>
  </div>
</template>

<script>
  import goods from '@/components/delicategoods'
  import sortgoods from '@/components/sortgoods'
  import searchtop from '@/components/searchtop'
  import classify from '@/components/classify'
  import footter from '@/components/footter'
  import Scroll from 'better-scroll'
    export default {
        name: "shoplist",
      data() {
          return{
            sorts:['全部分类','男装','女装','内衣','母婴','美妆','居家','运动','美食','文体','数码','钱包','其他'],
            allfilter:['默认排序','券后价最低','优惠最多'],
            nowindex: 0,
            filterindex:0,
            goods: [1,2,3,4,5,6]
          }
      },
      components:{
          footter,
          classify,
          searchtop,
          sortgoods,
          goods
      },
      created() {
          this.$nextTick(()=>{
            this.initscorll()
          })
      },
      methods:{
          initscorll(){
            this.clientwindow = new Scroll(this.$refs.warpper,{click:true})
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
  .topall{
    position: absolute;
    top: 0;
    bottom:50px;
    width: 100%;
    overflow: hidden;
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
  .search input{
    margin-left: 10px;
    font-size: 14px;
    color:#333333;
    width: 280px;
  }
</style>

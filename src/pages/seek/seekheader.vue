<template>
  <div>
    <div>
      <div class="filtrate">
        <div class="searchsecond">
          <div style="display: flex">
          <div class="back" @click="back">
          <i class="iconfont icon-fanhui3"></i>
          </div>
          <div class="ipt">
            <i class="iconfont icon-fangdajing1"></i>
            <input type="text" placeholder="请输入关键词">
          </div>
          </div>
          <div class="sure tc">
            <p>确定</p>
          </div>
        </div>
        <div class="sort" ref="sortwarpper">
          <ul>
            <li v-for="(item,index) in sorts"  @click="sureon(index)" :class="{sortsure:index===nowindex}">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from 'better-scroll'
  export default {
    name: "shoplist",
    data() {
      return{
        sorts:['全部分类','男装','女装','内衣','母婴','美妆','居家','运动','美食','文体','数码','钱包','其他'],
        nowindex: 0,
        filterindex:0
      }
    },
    components:{
    },
    created() {
      this.$nextTick(()=>{
        this.initscorll()
      })
    },
    methods:{
      initscorll(){
        this.sort = new Scroll(this.$refs.sortwarpper,{scrollX:true})
      },
      sureon(inx){
        this.nowindex = inx;
      },
      filtersure(idx){
        this.filterindex = idx;
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .back{
    width: 35px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .icon-fanhui3{
    color: white;
  }
  .sort{
    width: 95%;
    font-size: 14px;
    height: 30px;
    color:white;
    margin-top: 12px;
    margin-left: 2%;
    overflow: hidden;
  }
  .sort ul{
    width: 660px;
    height: 25px;
  }
  .sort li{
    float: left;
    margin: 0 10px;
    padding-bottom: 5px;
  }
  .sortsure{
    border-bottom:2px solid white;
    font-weight: 600;
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
  .icon-fangdajing1{
    margin-left: 14px;
    color:#999999;
    font-size: 16px;
  }
  .ipt input{
    font-size: 12px;
    color:#333333;
    margin-left: 10px;
    width: 200px;
  }
  .sure{
    width: 63px;
    height: 30px;
    border-radius: 16px;
    background: white;
    line-height: 30px;
    font-size: 12px;
    color:#333333;
  }
  .ipt{
    width: 250px;
    height: 30px;
    border-radius: 16px;
    background: white;
    display: flex;
    align-items: center;
  }
  .back{
    display: inline-block;
  }
  .searchsecond{
    padding: 12px 12px 0 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search input{
    margin-left: 10px;
    font-size: 14px;
    color:#333333;
    width: 280px;
  }
  .filtrate{
    width: 100%;
    height: 90px;
    background:#B9473D;
  }
</style>

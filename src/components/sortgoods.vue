<template>
    <div>
      <div>
        <div class="productlist">
          <div style="width: 100%;height: 20px;">
            <ul >
              <li v-for="(filter,index) in allfilter" @click="filtersure(index)" :class="{filterclass:index===filterindex}">{{filter}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "shoplist",
    data() {
      return{
        allfilter:['默认排序','券后价最低','优惠最多'],
        nowindex: 0,
        filterindex:0
      }
    },
    methods:{
      filtersure(idx){
        this.filterindex = idx;
      }
    }
  }
</script>

<style scoped>
  .productlist .filterclass{
    color:#B9473D;
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
  .productlist li{
    float: left;
    font-size: 13px;
    color:#777777;
    padding-left: 13px;
    padding-right: 13px;
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
  .productlist{
    padding: 16px 3px 10px 3px;
  }
</style>

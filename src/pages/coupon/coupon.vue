<template>
    <div>
      <div ref="warpper" class="bscroll">
        <div>
      <searchtop></searchtop>
      <classify></classify>
      <sortgoods></sortgoods>
      <div class="goodscontent">
        <goods v-for="(item,index) in goods" :key="index"></goods>
      </div>
        </div>
      </div>
      <footter></footter>
    </div>
</template>

<script>
  import goods from '@/pages/coupon/coupongoods'
  import sortgoods from '@/components/sortgoods'
  import searchtop from '@/components/searchtop'
  import classify from '@/components/classify'
  import footter from '../../components/footter'
  import Scroll from 'better-scroll'
    export default {
        name: "coupon",
      data(){
          return{
              goods:[1,2,3,4,5,6,7,8]
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
            this.initscroll()
          })
      },
      methods:{
          initscroll(){
            this.btscroll = new Scroll( this.$refs.warpper,{click:true})
          }
      }
    }
</script>

<style scoped>
  .bscroll{
    position: absolute;
    top: 0;
    bottom:50px;
    width: 100%;
    overflow: hidden;
  }
.goodscontent{
  padding: 0 6px 0 6px;
}
</style>

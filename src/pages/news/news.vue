<template>
  <div>
    <div class="bscroll" ref="warpper">
      <div>
        <searchtop></searchtop>
        <classify></classify>
        <sortgoods></sortgoods>
        <onegoods v-for="(item,index) in count" :key="index"></onegoods>
      </div>
    </div>
  <footter></footter>
  </div>
</template>

<script>
  import sortgoods from '@/components/sortgoods'
  import onegoods from '@/components/onegoods'
  import searchtop from '@/components/searchtop'
  import classify from '@/components/classify'
  import footter from '../../components/footter'
  import Bscroll from  'better-scroll'
    export default {
        name: "news",
      data(){
          return{
            count:[1,2,3,4,5,6,7,8]
          }
      },
      components:{
          footter,
        classify,
        searchtop,
        sortgoods,
        onegoods
      },
      created() {
         this.$nextTick(()=>{
           this.initscroll()
         })
      },
      methods:{
          initscroll(){
            this.inits = new Bscroll(this.$refs.warpper,{click:true})
          }
      }
    }
</script>

<style scoped>
.bscroll{
  position: absolute;
  top: 0;
  bottom: 50px;
  overflow: hidden;
  width: 100%;
}
</style>

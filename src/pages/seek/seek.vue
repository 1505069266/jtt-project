<template>
    <div ref="warpper" class="content">
        <div>
          <searchtop></searchtop>
          <classify></classify>
          <sortgoods></sortgoods>
          <goodslist></goodslist>
        </div>
    </div>
</template>

<script>
  import sortgoods from '@/components/sortgoods'
  import searchtop from '@/components/searchtop'
  import classify from '@/pages/seek/seekheader'
  import goodslist from '@/components/onegoods'
  import Bscroll from 'better-scroll'
    export default {
        name: "seek",
      data(){
          return{

          }
      },
      components:{
        classify,
        searchtop,
        sortgoods,
        goodslist
      },
      created() {
          this.$nextTick(()=>{
            this.initscroll()
          })
      },
      methods:{
          initscroll(){
            this.scroll = new Bscroll(this.$refs.warpper,{click:true})
          }
      }
    }
</script>

<style scoped>
.content{
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>

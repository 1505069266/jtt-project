<template>
    <div>
      <div>
        <div class="ref" ref="wrapper">
          <div>
        <!--<div class="search">-->
          <!--<div class="searchcont">-->
            <!--<i class="iconfont icon-Magnifier"></i>-->
            <!--<input type="text" placeholder="京推推精选" class="firstipt">-->
            <!--<i class="iconfont icon-shuaxin1"></i>-->
          <!--</div>-->
        <!--</div>-->
        <div class="searchsecond">
          <div class="searchtwo">
            <i class="iconfont icon-fangdajing1"></i>
            <input type="text" placeholder="羽绒服" class="secondipt">
          </div>
          <div class="firstsure">
              <span>确定</span>
          </div>
        </div>
        <div class="banner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(list,index) in swiper" :key="index">
              <img :src="list.goodsimage">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="allclassify">
        <div class="classify">
          <div class="classifytop">
            <ul>
              <li>
                <div>
                  <img src="../../static/classify/nvzhuang.png" alt="">
                </div>
                <p>女装</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/nanzhuang.png" alt="">
                </div>
                <p>男装</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/neiyi.png" alt="">
                </div>
                <p>内衣</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/muying.png" alt="">
                </div>
                <p>母婴</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/meizhuang.png" alt="">
                </div>
                <p>美妆</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/yundong.png" alt="">
                </div>
                <p>运动</p>
              </li>
            </ul>
          </div>
          <div class="classifybottom">
            <ul>
              <li>
                <div>
                  <img src="../../static/classify/jujia.png" alt="">
                </div>
                <p>居家</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/xiebao.png" alt="">
                </div>
                <p>鞋包</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/meishi.png" alt="">
                </div>
                <p>美食</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/wenti.png" alt="">
                </div>
                <p>文体</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/shuma.png" alt="">
                </div>
                <p>数码</p>
              </li>
              <li>
                <div>
                  <img src="../../static/classify/qita.png" alt="">
                </div>
                <p>其他</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="division">
            <ul class="divisionul">
              <li>
                <div>
                  <img src="../../static/qiuzhuang.png" alt="">
                </div>
                <p>秋装专场</p>
              </li>
              <li>
                <div>
                  <img src="../../static/meizhuang.png" alt="">
                </div>
                <p>美妆专场</p>
              </li>
              <li>
                <div>
                  <img src="../../static/huwai.png" alt="">
                </div>
                <p>户外旅行</p>
              </li>
              <li>
                <div>
                  <img src="../../static/jiaju.png" alt="">
                </div>
                <p>家居专场</p>
              </li>
              <li>
                <div>
                  <img src="../../static/maozi.png" alt="">
                </div>
                <p>9.9专场</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods">
          <div class="hot">
            <div class="hottitle">
              <img src="../../static/hotimg.png" alt="" class="hotimg">
              <div class="hotmore">更多 <img src="../../static/morejian.png" alt=""> </div>
            </div>
            <goodsdiv :goods="hotgoods"></goodsdiv>
          </div>
          <div>
            <div class="choicetitle">
              <img src="../../static/choiceimg.png" alt="" class="choiceimg">
              <div class="choicemore">更多 <img src="../../static/morejian.png" alt=""> </div>
            </div>
            <choice :goods="choicegoods"></choice>
          </div>
          <div>
            <div class="limittitle">
              <img src="../../static/limitimg.png" alt="" class="limitimg">
              <div class="limitmore">更多 <img src="../../static/morejian.png" alt=""> </div>
            </div>
            <limitdiv :goods="limitgoods"></limitdiv>
          </div>
        </div>
        </div>
        </div>
        <footter></footter>
      </div>
    </div>
</template>

<script>
  import choice from  '@/components/choiceness'
  import limitdiv from  '@/components/limittime'
  import goodsdiv from  '@/components/onegoods'
  import footter from '../../components/footter'
  import BScroll from  'better-scroll'
  import api from '../../api.js'
    export default {
      name: "home",
      data(){
        return{
          value1:0,
          hotgoods:[],
          choicenessgoods:1,
          choicegoods:[],
          limitgoods:[],
          limittime:1,
          swiper:[
            {
              img:require("../../static/banner/q.jpg")
            },
            {
              img:require("../../static/banner/w.jpg")
            },
            {
              img:require("../../static/banner/e.jpg")
            },
            {
              img:require("../../static/banner/r.jpg")
            },
            {
              img:require("../../static/banner/t.jpg")
            }
          ]
        }
      },
      components:{
          footter,
          goodsdiv,
          choice,
          limitdiv
      },
      methods:{
        a(){
          this.$router.push({path:'details'})
        },
        initscorll(){
          let options = {
            probetype:3,
            click:true,
            scrollX:true,
            // scrollbar:{
            //   fade:true,
            //   interractive:true
            // },
            // better-scroll 滚动条开关
            
          }
          this.top = new BScroll(this.$refs.wrapper,options)
        }
      },
      created() {
        this.$nextTick(()=>{
          this.initscorll();
          // this.$axios.post('/news/api',{ withCredentials: true})
          //   .then(function(response){
          //     console.log(response);
          //   })
          //   .catch(function(error){
          //     console.log(error);
          //   });
          api.data('/data/index')
            .then(res => {
              console.log(res);
              this.hotgoods = res.hot;
              this.choicegoods = res.choice;
              this.limitgoods = res.limit;
              this.swiper = res.swiper;
            })
        })
      }
    }
</script>

<style scoped>
  .choicetitle{
    padding: 6px 0 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .choicemore img{
    width: 9px;
    height: 9px;
    margin-left: 3px;
  }
  .choicemore{
    position: absolute;
    display: flex;
    align-items: center;
    right: 5px;
    top: 5px;
    font-size: 12px;
    color:#333333;
  }
  .choiceimg{
    width: 110px;
    height: 16px;
  }
  .limittitle{
    padding: 6px 0 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .limitmore img{
    width: 9px;
    height: 9px;
    margin-left: 3px;
  }
  .limitmore{
    position: absolute;
    display: flex;
    align-items: center;
    right: 5px;
    top: 5px;
    font-size: 12px;
    color:#333333;
  }
  .limitimg{
    width: 110px;
    height: 16px;
  }
  .hottitle{
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .hotmore img{
    width: 9px;
    height: 9px;
    margin-left: 3px;
  }
  .hotmore{
    position: absolute;
    display: flex;
    align-items: center;
    right: 5px;
    top: 15px;
    font-size: 12px;
    color:#333333;
  }
  .hotimg{
    width: 110px;
    height: 16px;
  }
  .division img{
    width: 48px;
    height: 48px;
    margin-top: 15px;
    margin-bottom: 17px;
  }
  .division p{
    font-size: 12px;
    color: #333333;
  }
  .division li{
    width: 20%;
    height: 100%;
    text-align: center;
    float: left;
  }
  .division{
    padding: 10px 12px 0 12px;
    width: 100%;
    background: #F5F5F5;
  }
  .division ul{
    width: 100%;
    height: 114px;
    background: white;
    box-shadow: 0px 1px 2px #DBDBDB;
  }
  .classifybottom img{
    width: 38px;
    height: 38px;
  }
  .classifybottom li div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .classifybottom li p{
    margin-top: 7px;
    text-align: center;
    font-size: 11px;
    color:#333333;
  }
  .classifybottom li{
    width: 16.6%;
    float: left;
  }
  .classifybottom ul{
    width: 100%;
    height: 100%;
  }
  .classifybottom{
    width: 100%;
    height: 81px;
    padding-top: 10px;

  }
  .classifytop img{
    width: 38px;
    height: 38px;
  }
  .classifytop li div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .classifytop li p{
    margin-top: 7px;
    text-align: center;
    font-size: 11px;
    color:#333333;
  }
  .classifytop li{
    width: 16.6%;
    height: 100%;
    float: left;
  }
  .classifytop ul{
    width: 100%;
    height: 100%;
  }
  .classifytop{
    width: 100%;
    height: 81px;
    padding-top: 15px;
  }
  .ref{
    position: absolute;
    top: 0;
    bottom:50px;
    width: 100%;
    overflow: hidden;
  }
  .icon-fangdajing1{
    color:#999999;
    font-size: 16px;
    margin-right: 8px;
  }
  .goods{
    padding: 0px 6px 0 6px;
  }
  .secondipt::-webkit-input-placeholder{
    font-size: 12px;
    color:#7A7A7A;
  }
  .secondipt{
    width: 140px;
    font-size: 12px;
    color:#333333;
    background: #F5F5F5;
  }
  .searchtwo i{
    font-size: 15px;
    color:#777777;
    margin-left: 12px;
  }
  .searchtwo img{
    width: 22px;
    height: 28px;
    margin: 2px 0 0 11px;
  }
  .allclassify{
    width: 100%;
    background: white;
    position: relative;
  }
  .banner{
    width: 100%;
    height: 131px;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }
  .searchtwo{
    border-radius: 5px;
    background: #F5F5F5;
    width: 263px;
    height: 31px;
    display: flex;
    align-items: center;
  }
  .firstsure{
    border-radius: 4px;
    background:#F5F5F5;
    width: 63px;
    text-align: center;
    line-height:30px;
    font-size: 12px;
  }
  .searchsecond{
    width: 100%;
    height: 53px;
    padding: 12px 20px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

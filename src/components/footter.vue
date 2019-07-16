<template>
  <div id="botom">
    <ul >
      <router-link to="/home" tag="li">
        <div>
          <div>
            <div v-if="active==='home'" class="homepage"></div>
            <div v-else class="homepage1"></div>
          </div>
          <span>首页</span>
        </div>
      </router-link>
      <router-link to="/shoplist" tag="li" >
        <div>
          <div style="display: flex;justify-content: center;">
            <div v-if="active==='shoplist'" class="goodsgood"></div>
            <div v-else class="goodsgoodl"></div>
          </div>
          <span>精选好货</span>
        </div>
      </router-link>
      <router-link to="/news"  tag="li" >
        <div>
          <div style="display: flex;justify-content: center;">
            <div v-if="active==='news'" class="limitgoods"></div>
            <div v-else class="limitgoodsl"></div>
          </div>
          <span>实时上新</span>
        </div>
      </router-link>
      <router-link  to="/coupon" tag="li" >
        <div>
          <div style="display: flex;justify-content: center;">
            <div v-if="active==='coupon'" class="coupongoods"></div>
            <div v-else class="coupongoodsl"></div>
          </div>
          <span>全部优惠券</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "footter",
      data(){
          return{
            active:'home'
          }
      },
      created(){
        this.active = this.$route.path.slice(1);
      },
      methods:{

      }
    }
</script>

<style scoped>
  .coupongoods{
    width: 23px;
    height: 23px;
    background: url("../static/home/couponon.png");
    background-size: cover;
  }
  .coupongoodsl{
    width: 23px;
    height: 23px;
    background: url("../static/home/coupon.png");
    background-size: cover;
  }
  .limitgoods{
    width: 23px;
    height: 23px;
    background: url("../static/home/newon.png");
    background-size: cover;
  }
  .limitgoodsl{
    width: 23px;
    height: 23px;
    background: url("../static/home/new.png");
    background-size: cover;
  }
  .goodsgood{
    width: 23px;
    height: 23px;
    background: url("../static/home/choiceon.png");
    background-size: cover;
  }
  .goodsgoodl{
    width: 23px;
    height: 23px;
    background: url("../static/home/choice.png");
    background-size: cover;
  }
  .homepage{
    width: 23px;
    height: 23px;
    background: url("../static/home/homeon.png");
    background-size: cover;
  }
  .homepage1{
    width: 23px;
    height: 23px;
    background: url("../static/home/home.png");
    background-size: cover;
  }
  #botom{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom:0;
    z-index: 999;
    border-top:1px solid #E9E9E9;
    background: white;
  }
  ul{
    display: flex;
    align-items: center;
  }
  ul li{
    width: 25%;
    height: 50px;
    float: left;
    text-align: center;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#333333;
    font-size: 11px;
    font-weight: 500;
  }
  ul i{
    font-size: 22px;
    font-weight:500;
  }
  .router-link-active{
    color:#B9473D;
  }
</style>

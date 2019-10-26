
<style>

  .none{
   display: none;
  }
  .show{
    display: block;
  }
  .app_box{
    width:100%;
    min-height:100%;
    display: flex;
    flex-flow: column;
    flex-direction: column;
  }
</style>

<template>
  <div id="app"> 
    <home class="app_box" :style="{display:readyover ?'':'none'}"></home>
    <ready class="ready" :style="{display:readyover?'none' :'block'}" @upward="overReady"></ready>
   
  </div>
</template>

<script>
import ready from '@/components/ready.vue';
import home from '@/components/home.vue';
export default {
  name: 'app',
  data(){
    return {
      readyover:false 
    }
  },
  components:{
    ready,
    home
  },
  created(){
    let userAgent = navigator.userAgent;
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE || isIE11){
      alert('暂不支持IE浏览器，请选择谷歌、火狐、Edge等浏览器');
      this.$router.replace({path:'/Unsupported'});
    }
    if( window.sessionStorage.getItem("zzk") ){
      this.readyover =true;
    }
  },
  mounted(){
  
  },
  methods:{
    overReady(){
      this.readyover = true;
      window.sessionStorage.setItem("zzk", "one_ready");
    }
  }
  

}
</script>


<style>
.html-ready{
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.822);
    position: fixed;
    top:0;
    left:0;
    z-index:1000;
}
.ready-content{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    font-size:50px;
}
.ready-window{
    margin:0 auto;
    margin-right:10px;
    width:100px;
    height:100px;
    text-align: center;
    color:#fff;
    line-height:100px;
    border-radius: 50%;
    box-shadow:1px 2px 2px #fff ;
    background: rgba(165, 27, 50,0.8 );
    transform: scale(0,0);
}
.animation{
   transition:  all 0.5s;
   animation: soufang 1s 1s forwards	;
}
@keyframes soufang{
   0%{
      transform: scale(0,0) 
   }
   80%{
      transform:scale(1.2,1.2)
   }
   100%{
      transform:scale(1,1)
   }
}
</style>

<template>
  <div class="html-ready">  <!--加载界面-->
      <div class="ready-content row ">
         <div v-for="item,index in content" :key="index" class='ready-window center-block'
            :class="{animation : item.show == true  }" >
            {{item.a}}
         </div>
      </div>
    </div>
</template>

<script>
let content = [
   {
      a:'我',
      show:false
   },
   {
      a:'准',
      show:false
   },
   {
      a:'备',
      show:false
   },
   {
      a:'好',
      show:false
   },
   {
      a:'了',
      show:false
   }
];
export default {
   data(){
      return {
         ready:'block',
         Time:0,
         content
      }
  },
  mounted(){
     let time = setInterval(()=>{
        this.content[this.Time].show = true;
        this.Time++;
        let _this = this;
        if(this.Time > content.length-1){
          setTimeout(()=>{
             _this.$emit('upward');
           },2500);
           clearInterval(time);
        }
     }, 500);
  }
}
</script>

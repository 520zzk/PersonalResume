<style scoped src="../style/Contact.css">

</style>
<template>
    <div  class="contact-bg" >  <!--联系方式-->
      <div class="container">
         <div class="contact_box" :class="{contact_box_animation: show_content ==1}" >
             <img src="../assets/img/box_top.png" alt="">
             <img src="../assets/img/box_bottom.png" alt="">
             <p>将来的你一定会感谢</p>
             <p>现在奋斗的你</p>
             <p>即便世界不会因你而改变</p>
             <p>但是也会因你而精彩</p>
             <p>让我们携手</p>
             <p>创造更美好的未来</p>
         </div>
         <ul class="contact_ul " :class="{contact_ul_animation: show_content ==1}">
             <li @mouseenter="enter(1)" @mouseleave="leaver"><a href="javascript:;" class="iconfont icon-qq"></a>
             <div v-show="show_num == 1" class="contact_ul_li"><img src="../assets/img/get_qq.jpg" alt=""></div></li>
             <li @mouseenter="enter(2)" @mouseleave="leaver"><a href="javascript:;" class="iconfont icon-weixing"></a>
             <div v-show="show_num == 2" class="contact_ul_li"><img src="../assets/img/get_weixin.jpg" alt=""></div></li>
             <li @mouseenter="enter(3)" @mouseleave="leaver"><a href="https://github.com/520zzk/" class="iconfont icon-github"></a>
             <div v-show="show_num == 3" class="contact_ul_li"><img src="../assets/img/get_github.png" alt=""></div></li>
             <li @mouseenter="enter(4)" @mouseleave="leaver"><a href="javascript:;" class="iconfont icon-youxiang"></a>
             <div v-show="show_num == 4" class="contact_ul_li"><h5>邮箱</h5><p class="text-info">chinazhzhk@163.com</p></div></li>
             <li @mouseenter="enter(5)" @mouseleave="leaver"><a href="javascript:;" class="iconfont icon-Telephone"></a>
             <div v-show="show_num == 5" class="contact_ul_li"><h5>电话</h5><p class="text-danger">182-7142-7147</p></div></li>
         </ul>
      </div>
      <footer class="contact_footer">
          <span class="iconfont icon-banquan">Copyright 2019 zzk All rights Reserved</span>
          <span class="iconfont icon-icp"><a href="http://beian.miit.gov.cn/" target="_blank">鄂ICP备19015487号</a> </span>
          <span class="iconfont icon-tishi">如有版权等问题，请及时联系我</span>
      </footer>
    </div>
</template>
<script>
 import "@/style/iconfont.css";
export default {
    data(){
        return {
            show_num : null,
          times :null,
          show_content:null
        }    
    },
    mounted(){
        setTimeout(()=>{this.show_content=1},500)
    },
    computed:{
      
    },
    methods:{
        enter(num){
            this.show_num = num;
            clearTimeout(this.times);
        },
        leaver(){
            clearTimeout(this.times);
            this.times = setTimeout(()=>{this.show_num = 0 },500);
        }
    }
    
}
</script>

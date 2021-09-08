<style src="../style/home.css">
</style>
<template>
    <div>
       <div class="container overflow" ref="navbar">
           <!-- navber -->
           <div class="row">
               <div class="navbar margin-top">
                    <div class="navbar-header">
                        <img src="../assets/img/logo.png" alt="">
                        <span class="btn-lg btn-success pull-right visible-xs Btn-show" @click="showNav">
                            <span class="glyphicon glyphicon-menu-hamburger"></span>
                        </span>
                    </div> 
                    <ul class=" nav navbar-nav pull-float sm-hidden cla sm-ul" :class="{'sm-show':navStatus}" @click="showNav" >
                        <router-link to="/myresume" tag="li" exact >
                                <a  href="javascript:;">自我介绍</a>
                            </router-link>
                        <router-link to="/adolesce" tag="li" >
                                <a  href="javascript:;">成长经历</a>
                            </router-link>
                        <router-link to="/skill" tag="li" >
                                <a  href="javascript:;">技能掌握</a>
                            </router-link>
                        <router-link to="/board" tag="li" >
                                <a  href="javascript:;">展示板</a>
                            </router-link>
                        <router-link to="/Contact" tag="li" >
                                <a  href="javascript:;">联系方式</a>
                            </router-link>
                    </ul>                    
               </div>
           </div>
       </div>
        <transition mode="out-in" :name="names">
            <router-view class="homebox"></router-view>  <!--可以添加一个类名，实现总体样式-->
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            names:'',
            navStatus:false
        }
    },
    watch:{
    $route(to,form){
     let t = to.meta.index;
     let f = form.meta.index;
     t > f ? this.names = 'right':this.names = 'left' ;
    } 
  },
  mounted(){
       
  },
  methods:{
    showNav(){
        this.navStatus = !this.navStatus;
    }
  },
  
}
</script>

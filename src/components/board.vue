<style src="../style/board.css">
</style>
<template>
    <div  class="board-bg"> <!--展示板-->
      <div class="container board_box">
         <div class="row_box" ref="row_box1" @mouseenter="enter" @mouseleave="leave">
             <div class="thumbnail">
                <img src="../assets/img/ss.jpg" alt="...">
                <div class="caption">
                    <h5 class="text-danger">学而思响应式</h5>
                    <p class="text-muted">通过Bootstrap，制作一个自己的可以响应的网页</p>
                    <p><a href="https://520zzk.github.io/school_xue/PC.html" target="_blank" class="btn btn-primary" role="button">在线预览</a> 
                        <a href="https://github.com/520zzk/school_xue" target="_blank" class="btn btn-default" role="button">项目地址</a>
                    </p>
                </div>
            </div>
         </div>
         <div class="row_box" ref="row_box2" @mouseenter="enter" @mouseleave="leave">
             <div class="thumbnail">
                <img src="../assets/img/Renderings.jpg" alt="...">
                <div class="caption">
                    <h5 class="text-danger">图片拖拽与位置交换</h5>
                    <p class="text-muted">原生js展示图片的拖拽与交换，利用js判断最近实现交换</p>
                    <p> <a href="https://520zzk.github.io/drag_pic/move_swap.html" target="_blank" class="btn btn-primary" role="button">在线展示</a> 
                        <a href="https://github.com/520zzk/drag_pic" target="_blank" class="btn btn-default" role="button">项目地址</a>
                    </p>
                </div>
            </div>
         </div>
         <div class="row_box" ref="row_box3" @mouseenter="enter" @mouseleave="leave">
             <div class="thumbnail">
                <img src="../assets/img/myresume.jpg" alt="...">
                <div class="caption">
                    <h5 class="text-danger">个人简历网页制作</h5>
                    <p class="text-muted">通过所学知识，制作一个自己的网页版简历</p>
                    <p><a href="https://github.com/520zzk/PersonalResume" target="_blank" class="btn btn-success" role="button">项目地址</a></p>
                    </div>
            </div>
         </div>
         <div class="row_box" ref="row_box4" @mouseenter="enter" @mouseleave="leave">
             <div class="thumbnail">
                <img src="../assets/img/WeChat.jpg" alt="...">
                <div class="caption">
                    <h5 class="text-danger">微信小程序电影预告片</h5>
                    <p class="text-muted">通过豆瓣接口请求数据，利用小程序平台展示。</p>
                    <p><a href="https://github.com/520zzk/Movie-Trailer" target="_blank" class="btn btn-primary" role="button">项目地址</a></p>
                </div>
            </div>
         </div>
         <div class="row_box" ref="row_box5" @mouseenter="enter" @mouseleave="leave">
             <div class="thumbnail">
                <img src="../assets/img/test_system.jpg" alt="">
                <div class="caption">
                    <h5 class="text-danger">在线考试缩小版</h5>
                    <p class="text-muted">通过后台数据库，存储考试用户和考试信息，利用ThinkPHP等后端框架进行数据交互。</p>
                    <p><a href="https://github.com/520zzk/Online_Test_System" target="_blank" class="btn btn-primary" role="button">项目地址</a></p>
                </div>
            </div>
         </div>
          <div class="controller">
               <span class="glyphicon glyphicon-arrow-left" ref="left" @click="move('left')"></span>
               <span class="glyphicon glyphicon-arrow-right" ref="right" @click="move('right')"></span>
           </div>
      </div>
    </div>
</template>
<script>
    import {startMove} from '@/assets/js/Move.js';
export default {
    data(){
        return {
            row_box_info:[],
            times:null,
            row_all:null,
        }    
    },
    computed:{
        
        },
    created(){
       
    },
    mounted(){
        this.getElement_info();
        this.time(); //开启循环
    },
    methods:{
        Carousel(t){    //循环动画执行函数
            if(t=="left"){  
                this.row_box_info.push(this.row_box_info.shift());  //把第一项放到数组后
            }else{
                this.row_box_info.unshift(this.row_box_info.pop());   //否则把最后一项放入数组第一个
            }
            for(let i=0;i<this.row_all.length;i++){   //数组已经变化，循环
                let oimg=this.row_all[i]; //每次循环时，获取
                startMove(oimg,{        //把改变后的位置等关系调整
                    width:this.row_box_info[i][0],     //注意看 i 的位置，this.row_box_info是一个二维数组，
                    left:this.row_box_info[i][1],
                    top:this.row_box_info[i][2],
                    filter:this.row_box_info[i][4],
                    opacity:this.row_box_info[i][5]
                });
                oimg.style.zIndex=this.row_box_info[i][3];   //层级的关系时一直不变的，数组怎样改变层级都不该变，保准图片移动后，1的层级还是1 ...
            }  
        },
        time(){
            clearInterval(this.times);    //先清除，避免定时器的
            let _this = this;
            this.times=setInterval(function(){
                _this.Carousel("left");
            },3000);
        },
        enter(event){
            let e = event||window.event;
            if(this.getStyle(e.target,'zIndex') == 3){
                clearInterval(this.times);
            };
        },
        leave(event){
            let e = event ||window.event;
            if(this.getStyle(e.target,'zIndex') == 3){
               this.move('left');
            };
        },
        move(f){   //点击事件，左右判断执行  写在了行内
            f=="left"?this.Carousel('left'):this.Carousel("right");
            this.time(); //执行完后再次循环
        },
        getStyle(obj,attr){    //获取样式的的通用函数
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }else{
                return getComputedStyle(obj,false)[attr];
            }
        },
        getElement_info(){
            this.row_all = document.getElementsByClassName('row_box');
            for(let i=0;i<this.row_all.length;i++){
            this.row_box_info.push([
                parseInt(this.getStyle(this.row_all[i],'width')),
                    parseInt(this.getStyle(this.row_all[i],'left')),
                    parseInt(this.getStyle(this.row_all[i],'top')),
                    parseInt(this.getStyle(this.row_all[i],'zIndex')),
                    this.getStyle(this.row_all[i],'filter'),
                    parseInt(this.getStyle(this.row_all[i],'opacity')*100)           
            ]);
            }
        }
    },
    beforeDectroy(){    //实例销毁
       
    },
     beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用,可以this
        clearInterval(this.times);
        this.row_box_info =[];
        this.row_all =null;
        next();
        
    }
    
}
</script>

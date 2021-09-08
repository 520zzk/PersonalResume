<style scoped src="../style/adolesce.css">

</style>
<template>
    <div  class="adolesce-bg" >  <!--成长经历-->
      <div class="container adolesce-about" :class="{aboutAnimation : showUp == true}" ref="scrollbox">
         <div class="adolesce-box" :style="{left:moveboxleft + 'px',width:widthAll + 'px'}" ref="movebox">
             <div class="abolesce-box-init adolesce-box-01" :class="{box01 : showUp == true}"  ref="box01">
               <img src="../assets/img/Myhistory.png" alt="">
                <p>在2017年的夏天，我来到了武汉职业技术学院，在这里我是第一次了解到了我的专业【计算机网络技术】，我专业的发展方向就是web前端方向，
                    第一次接触前端的起点，便是从这里开始的
                </p>
                <div class="line"><span class="glyphicon glyphicon-record"></span></div>
             </div>

             <div class="abolesce-box-init adolesce-box-02 " :class="{ down: 1 <= compare , NoPc : showUp == true }"  ref="box02">
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-02">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm" ></span> 2017-09</h4>
                     <p>在学校写下了第一个网页Hello World,开启前端之旅</p>
                 </div>
             </div>

             <div class="abolesce-box-init adolesce-box-03" :class="{ up: 2 <= compare, NoPc : showUp == true }" ref="box03" >
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-03">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm"></span> 大一上学期</h4>
                     <p>HTML、CSS、JS 逐步开启奇妙旅程</p>
                 </div>
             </div>

             <div class="abolesce-box-init adolesce-box-02 " :class="{ down: 3 <= compare , NoPc : showUp == true }"  ref="box04">
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-02">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm" ></span> 大一下学期</h4>
                     <p>原来我们还有JQ库、PHP做后端，Linux服务器,mySQL数据库等支撑</p>
                 </div>
             </div>

           <div class="abolesce-box-init adolesce-box-03" :class="{ up: 4 <= compare, NoPc : showUp == true }" ref="box05" >
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-03">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm"></span> 大二上学期</h4>
                     <p>加入了巨塔工作室，一群志同道合的的人聚在了一起，Bootstrap响应式开发，vue框架的学习，观看妙味课堂、腾讯课堂等学习视频，工作室日常打卡</p>
                 </div>
             </div>

             <div class="abolesce-box-init adolesce-box-02 " :class="{ down: 5 <= compare , NoPc : showUp == true }"  ref="box06">
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-02">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm" ></span> 大二下学期</h4>
                     <p>微信小程序的了解，vue-cli的学习、个人简历网站的构思与初步搭建，前端课程的持续性学习</p>
                 </div>
             </div>
             <div class="abolesce-box-init adolesce-box-03" :class="{ up: 6 <= compare, NoPc : showUp == true }" ref="box07" >
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-03">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm"></span> 大三就这么来了</h4>
                     <p>课程结余，个人简历完善。开展实习工作的查找</p>
                 </div>
             </div>
            <div class="abolesce-box-init adolesce-box-02 " :class="{ down: 7 <= compare , NoPc : showUp == true }"  ref="box08">
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-02">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm" ></span> 2020-06</h4>
                     <p>快客云科技，开启前端职场路，多人协作齐开发</p>
                 </div>
             </div>
              <div class="abolesce-box-init adolesce-box-03" :class="{ up: 8 <= compare, NoPc : showUp == true }" ref="box09" >
                 <div class="line"><span class="glyphicon glyphicon-fire"></span></div>
                 <div class="box-03">
                     <div class="line-v"></div>
                     <div class="visible-xs visible-sm line-box"> 
                         <div class="line-01"></div>
                         <div class="line-02"></div>
                     </div>
                     <h4><span class="glyphicon glyphicon-unchecked hidden-xs hidden-sm"></span> 2021-09</h4>
                     <p>欲知后事如何，且见面一谈</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
          moveboxleft:null,
          showUp:false,
          bindStatus:true,
          compare:0,
          device:null,
          widthAll:null
        }    
    },
    computed:{
        
    },
    created(){
       this.showUp = false;
    },
    mounted(){
        let Ispc = this.$root.IsPC(); //移动端还是PC端
        this.device = Ispc;
        if(Ispc){
            let scrollbox = this.$refs.scrollbox;
            let _this = this;
            if(scrollbox.addEventListener){ //兼容绑定
                scrollbox.addEventListener("DOMMouseScroll", this.bindEvent = function(e){
                    let v = e || window.event;
                    let { detail } = v;
                    _this.get_width();
                    if(_this.bindStatus){
                        _this.bindStatus = false;
                        detail < 0 ? _this.handleScroll(1) :_this.handleScroll(2);
                    }
                },false)
            }
            scrollbox.onmousewheel = function(e){
                let v = e || window.event;
                let { wheelDelta } = v;
                 _this.get_width();
                if(_this.bindStatus){
                    _this.bindStatus = false;
                    wheelDelta < 0 ? _this.handleScroll(1) :_this.handleScroll(2);
                }
            }
            
        }
        this.showUp = true;
        
    },
    beforeDectroy(){    //实例销毁
        let scrollbox = this.$refs.scrollbox;
        if (scrollbox.removeEventListener){
            scrollbox.removeEventListener('DOMMouseScroll', this.bindEvent,false);
        }
        scrollbox.onmousewheel = null;
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用,可以this
        next();
        
    },
    methods:{
        handleScroll(d){
                
                if( d==1 ){   
                    this.moveboxleft < -this.widthAll + 800 ? this.moveboxleft = -this.widthAll + 800: this.moveboxleft -=100; 
                }else{
                   console.log('a');
                    this.moveboxleft > 0 ? this.moveboxleft = 100 :this.moveboxleft +=100;
                }
            this.DomQuest();
        },
        DomQuest(){
            let { scrollbox,box02,box03 ,box04 } = this.$refs;
                let {width,left}  = scrollbox.getBoundingClientRect();
                let box_length = document.getElementsByClassName('abolesce-box-init').length;
                let count = 0;
                for(let i = 2 ;i<= box_length;i++){
                    let boxLeft = this.$refs['box0'+i].getBoundingClientRect().left;
                    boxLeft < ( width /2 +left +200) ? count++ : '';
                }
               this.compare =count;
            this.bindStatus = true;
        },
        get_width(){
            let abolesce_childen  = document.getElementsByClassName('abolesce-box-init');
             let a =null;
                for(let i=0;i<abolesce_childen.length;i++){
                   a+= abolesce_childen[i].offsetWidth;
                }
                this.widthAll =a;
        }

    }
    
}
</script>

<style scoped src="../style/skill.css">
</style>
<template>
    <div  class="skill-bg">
      <div class="container xs_shouji">    <!--技能掌握-->
            <div class="row sm-top">
                <div class="col-md-3 " :class="{'skill-box':showBxo = true}">
                   <div class="panel">
                       <div class="panel-heading bg01">
                           <img src="@/assets/img/html.png" alt="">  <span>Html</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[0]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[0]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div>

                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                    <div class="panel">
                       <div class="panel-heading bg02">
                           <img src="@/assets/img/css.png" alt="">  <span>Css样式表</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[1]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[1]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                    <div class="panel">
                       <div class="panel-heading bg03">
                           <img src="@/assets/img/js.png" alt="">  <span>javaScript</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[2]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[2]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                    <div class="panel ">
                       <div class="panel-heading bg04">
                           <img src="@/assets/img/jq.png" alt="">  <span>JQuery</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[3]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[3]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div> 
                <!-- 第二排 -->
                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                   <div class="panel">
                       <div class="panel-heading bg05">
                           <img src="@/assets/img/bootstrap.png" alt=""> <span>BootStrap</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[4]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[4]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                    <div class="panel">
                       <div class="panel-heading bg06">
                           <img src="@/assets/img/vue.png" alt="">  <span>Vue</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[5]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[5]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                    <div class="panel">
                       <div class="panel-heading bg07">
                           <img src="@/assets/img/weixin.png" alt=""><span>微信小程序</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[6]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[6]}%`}"></div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-md-3" :class="{'skill-box':showBxo = true}">
                    <div class="panel">
                       <div class="panel-heading bg08">
                           <img src="@/assets/img/git.png" alt="">  <span>Git协同工作</span>
                       </div> 
                        <div class="panel-body">
                            <p>{{widthNew[7]}}%</p>
                            <div class="progress progress-striped">
                                <div class="progress-bar progress-bar-primary active progress-user" :style="{ width: `${widthNew[7]}%`}"></div>
                            </div>
                        </div>
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
            showBox:false,
            widthNew:[0,0,0,0,0,0,0,0]
        }    
    },
    computed:{
       
    },
    created(){
        this.showBox = false;
        this.widthNew = [0,0,0,0,0,0,0,0];
    },
    mounted(){
        this.showBox  =   true;   
        let _this = this;
        setTimeout(()=>{
            let b = [80,80,80,70,70,80,60,60]
            let c = new Array(8);
            for(let i=0;i<b.length;i++){
                c[i] = setInterval(()=>{
                   
                    if(_this.widthNew[i] < b[i]){
                        let m =++ _this.widthNew[i];
                        _this.widthNew.splice( i , 1, m );
                    }else{
                       clearInterval(c[i]);
                    }
                },10);
            }
        },1000);
    },
    methods:{
       
    }
    
}
</script>

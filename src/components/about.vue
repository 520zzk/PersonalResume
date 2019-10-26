<style scoped src="../style/about.css">

</style>

<template>
    <div  class="about-bg">
      <div class="container content-about">  <!--自我介绍-->
          <div class="row ">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="media-heading" :class="{showHead : introduce == true }">
                            <h2>介绍语</h2>
                            <p>通过大学期间的寒暑假工作中，深刻明白了学好专业的重要性。所以在校期间，我利用课余时间，网上视频、授课等方式学习和补充专业技能。
                            在大二期间，加入了五星社团巨塔工作室，该工作室是一个集web前端程序、设计等方面的一个学习型社团。
                            本人职业规划为网络前端方向，所学皆以此为准，熟练使用js、vue.js、jQuery、BootStrap等框架
                            会使用Vue-cli、webpack、Visual Studio Code、微信开发者等构建和开发工具
                            我性格开朗，待人真诚、自信热情，做事脚踏实地、做事稳重、有责任心、能吃苦耐劳，富有时间观念，富于团队合作精神和集体荣誉感及企业忠诚度。可能我没有足够的经验，但是我的适应能力强，我一直坚信，人生就是活到老学到老的一个态度。
                            </p>
                    </div>
              </div>
              <div class=" col-md-4 col-sm-12 col-xs-12">
                    <a href="javascript:;">
                      <img src="../assets/img/oneself.jpg" class="about-img img-circle" 
                            :class="{showImg : introduce == true }" alt="">
                    </a>
                  <div class="about-info" :class="{ showInfo : introduce == true}">
                      <p>姓名：<span>赵钊坤</span></p>
                      <p>学校：<span>武汉职业技术学院</span></p>
                      <p><span>目前为大三</span></p>
                      <p>专业：<span>计算机网络技术【Web前端方向】</span></p>
                        <div>
                                <span class="label label-default">年轻</span>
                                <span class="label label-primary">积极</span>
                                <span class="label label-danger">上进</span>
                                <span class="label label-info">好学</span>
                                <span class="label label-success">乐观</span>
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
            introduce:false
        }    
    },
    computed:{
       
    },
    methods:{
       
    },
    created(){
            this.introduce = false;
    },
    mounted(){
            this.introduce = true;
    }
    
}
</script>

import Vue from 'vue';
import VueRouter from 'vue-router';
import about from '@/components/about.vue';
import adolesce from '@/components/adolesce.vue';
import skill from '@/components/skill.vue';
import board from '@/components/board.vue';
import Contact from '@/components/Contact.vue';
import Unsupported from '@/components/Unsupported.vue';


Vue.use(VueRouter);

let router=new VueRouter({
    mode:'history', //
    linkActiveClass:'li-active',  //路由选中时，样式
    routes:[      
        {
            path: '/myresume',  
            name:'about',  
            meta:{    //用来配置自己需要的信息，$route.meta 获取信息 
                index:0,
                title:'首页'
            },
          component: about
        },
        {
            path: '/adolesce',  
            name:'adolesce',  
            meta:{    
                index:1,
                title:'成长经历'
            },
          component: adolesce
        },
        {
            path: '/skill',  
            name:'skill',  
            meta:{    
                index:2,
                title:'技能掌握'
            },
          component: skill
        },
        {
            path: '/board',  
            name:'board',  
            meta:{    
                index:3,
                title:'展示板'
            },
          component: board
        },
        {
            path: '/Contact',  
            name:'Contact',  
            meta:{    
                index:4,
                title:'联系方式'
            },
          component: Contact
        },
        {
          path:'/Unsupported',
          name:'Unsupported',
          meth:{
            title:"不支持IE浏览器"
          },
          component:Unsupported
        }
    ]
});

router.afterEach((to,from)=>{
    if(to.meta.title){
      window.document.title = to.meta.title
    }else{
      window.document.title = '默认标题'
    }
  });
export default router;
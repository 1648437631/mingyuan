<template>
  <div class="product">
    <div class="sort">
    <div class="scroller">
      <div class="category" v-for="(item,index) in category">
        <div class="title" @click="showMun(index)">{{item.categoryName}}</div>
        <div class="category-children" :key="i" @click="activeClass(index,i)" v-for="(num,i) in item.children" v-if="item.isshow"
          :class="{active:p==index&&c==i}">{{num.name}}</div>
      </div>
      <div class="connection">
        <div class="title">联系方式</div>
        <div class="address">公司地址：深圳市光明新区楼村振兴路17号腾鸿兴科技园1栋3楼</div>
        <div class="address">电 话：0755-27668082</div>
        <div class="address">传 真：0755-27668167</div>
        <div class="address">联 系人：胡远松 </div>
        <div class="address">手机：13823588329</div>
        <div class="address">网址：</div>
        <div class="address">邮箱：904525818@qq.com</div>
      </div>
      </div>
    </div>
    <div class="product-show">
      <div class="msg"><span>{{defaultCategory}}</span></div>
      <div class="scroller-wrapper">
       <div class="scroller">
       <div class="prod" v-for="item in product">
          <div class="pord-box">
          <img :src=item.img alt="" class="">
          <span class="pord-name">{{item.name}}</span>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  </div>
</template>

<script>
 import Bscroll from 'better-scroll'
  export default {
    name: 'product',
    data() {
      return {
        bscroll: null,
        Bscroll: null,
        p: -1,
        c: -1,
        category: [{
          categoryName: 'LED元器件',
          isshow: false,
          children: [{
            name: '数码管',
            children: [{
                name: '一位数码管',
                img: require('../../static/image/product-1.jpg')
              },
              {
                name: '两位数码管',
                img: require('../../static/image/product-2.jpg')
              },
              {
                name: '三位数码管',
                img: require('../../static/image/product-3.jpg')
              },
              {
                name: '四位数码管',
                img: require('../../static/image/product-4.jpg')
              },
              {
                name: '五位数码管',
                img: require('../../static/image/product-5.jpg')
              },
              {
                name: '六位数码管',
                img: require('../../static/image/product-6.jpg')
              },
              {
                name: '七位数码管',
                img: require('../../static/image/product-7.jpg')
              },
              {
                name: '数码屏',
                img: require('../../static/image/product-8.jpg')
              },
            ]
          }, {
            name: '贴片数码管',
            children: [{
              name: '贴片数码管',
              img: require('../../static/image/product-tiepian.jpg')
            }]
          }, {
            name: '点阵',
            children: [{
              name: '点阵',
              img: require('../../static/image/product-dianzhen.jpg')
            }]
          }, {
            name: '箭头符',
            children: [{
              name: '箭头符',
              img: require('../../static/image/product-jiantou.jpg')
            }]
          }, {
            name: '光条',
            children: [{
              name: '光条',
              img: require('../../static/image/product-guangtiao.jpg')
            }]
          }, {
            name: '直插二极管',
            children: [{
              name: '直插二极管',
              img: require('../../static/image/product-zhicha.jpg')
            }]
          }, {
            name: '大功率二极管',
            children: [{
              name: '大功率二极管',
              img: require('../../static/image/product-big.jpg')
            }]
          }, {
            name: '贴片二极管',
            children: [{
              name: '贴片二极管',
              img: require('../../static/image/tiepianerjiguang.jpg')
            }]
          }, {
            name: '客户定制产品',
            children: [{
              name: '客户定制产品',
              img: require('../../static/image/kehudingzhi.jpg')
            }]
          }, {
            name: '平面管',
            children: [{
              name: '平面管',
              img: require('../../static/image/pingmian.jpg')
            }]
          }, {
            name: '彩屏',
            children: [{
              name: '彩屏',
              img: require('../../static/image/caiping.jpg')
            }]
          }, {
            name: '时钟板',
            children: [{
              name: '时钟板',
              img: require('../../static/image/shizhong.jpg')
            }]
          }]
        }, {
          categoryName: 'LED照明',
          isshow: false,
          children: [{
            name: '球泡灯',
            children: [{
              name: '球泡灯',
              img: require('../../static/image/qiupao.jpg')
            }]
          }, {
            name: '面板灯',
            children: [{
              name: '面板灯',
              img: require('../../static/image/mianban.jpg')
            }]
          }, {
            name: '灯管',
            children: [{
                name: 'T8灯管',
                img: require('../../static/image/T8.jpg')
              },
              {
                name: 'T10灯管',
                img: require('../../static/image/T10.jpg')
              }
            ]
          }, {
            name: '软灯条',
            children: [{
              name: '软灯条',
              img: require('../../static/image/dengtiao.jpg')
            }]
          }, {
            name: '路灯',
            children: [{
              name: '路灯',
              img: require('../../static/image/ludeng.jpg')
            }]
          }, {
            name: '天花灯',
            children: [{
              name: '天花灯',
              img: require('../../static/image/tianhuadeng.jpg')
            }]
          }, {
            name: '旷工灯',
            children: [{
              name: '旷工灯',
              img: require('../../static/image/kuanggongdeng.jpg')
            }]
          }, {
            name: '植物灯',
            children: [{
              name: '植物灯',
              img: require('../../static/image/zhiwudeng.jpg')
            }]
          }]
        }],
        product: [],
      defaultCategory:'全部产品'
      }
    },
    methods: {
      showMun(index){
        this.category[index].isshow=!this.category[index].isshow
        this.defaultCategory=this.category[index].categoryName
        this.product=new Array
        this.category[index].children.forEach(item=>{
          item.children.forEach(items=>{
            this.product.push(items)
          })
        })
         this.p = -1
        this.c = -1
       setTimeout(()=> {
               this.bscroll.refresh()
            }, 50);
      },
      activeClass(index, i) {
        this.p = index
        this.c = i
        this.product=new Array
        this.defaultCategory=this.category[index].children[i].name
        this.category[index].children[i].children.forEach(item=>{
          this.product.push(item)
        })
        setTimeout(()=> {
               this.bscroll.refresh()
            }, 50);
      }
    },
    mounted() {
      this.category.forEach(item => {
        item.children.forEach(items => {
          items.children.forEach(res => {
            this.product.push(res)
          })
        })
      })
       this.bscroll = new Bscroll('.scroller-wrapper', {
          probeType: 3,
          click:true
        })
         this.Bscroll = new Bscroll('.sort', {
           bounce: {
  top: false,
  bottom: false,
  left: false,
  right: false
},
          probeType: 3,
          click:true
        })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product {
    height: calc(100vh - 2.8rem);
    margin-top: 1.8rem;
  }

  .sort {
    position: fixed;
    width: 3rem;
    border-right: 1px #eee solid;
    top:1.8rem;
    left:0rem;
    bottom:1rem;
  }

  .category {
    width:100%;
  }

  .title {
    background-color: rgba(0, 205, 0, .6);
    font-size: .3rem;
    padding: 10px 20px;
    color: #000;
    border-bottom: 1px #fff solid
  }

  .category-children {
    font-size: .3rem;
    padding: 5px 0 5px 40px;
  }

  .active {
    color: #00CD00;
  }

  .address {
    font-size: .2rem;
    color: #000;
    padding: 5px 0 5px 5px;
    word-wrap: break-word;
  }

  .product-show {
   position: relative;
   width:7rem;
   margin-left:3rem;
  }
   .scroller-wrapper {
    width: 7rem;
    position:fixed;
    top:2.78rem;
    left:3rem;
    bottom:1rem;
  }
  .scroller {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  
  .prod{
    width:50%;
    display: flex;
    justify-content: space-around
  }
  .pord-box{
    width:80%;
    height:2.82rem;
  }
  .prod img{
    width:100%;
  }
  .pord-name {
    color: #000;
    width: 100%;
    text-align: center;
    display: block;
    padding:10px 0
  }

  .msg {
    width: 7rem;
    font-size: .28rem;
    text-align: center;
    height: 0.98rem;
    line-height: 0.98rem;
    background: #fff;
    position:fixed;
    top:1.8rem;
    left:3rem;
    z-index: 1000;
  }

  .msg span {
    position: relative;
    color: black;
  }

  .msg span:before,
  .msg span:after {
    content: '';
    position: absolute;
    top: 50%;
    background: #ccc;
    width: 1rem;
    height: 1px;
  }

  .msg span:before {
    left: 150%;
  }

  .msg span:after {
    right: 150%;
  }
  .connection{
    width:100%;
    padding-bottom:1rem;
  }
</style>

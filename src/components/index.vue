<template>
  <div class="index">
    <!-- <div class="swarp">
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../static/image/swipe_1.jpg" alt="" class="swipe-img"></swiper-slide>
        <swiper-slide><img src="../../static/image/swipe_2.jpg" alt="" class="swipe-img"></swiper-slide>
        <swiper-slide><img src="../../static/image/swipe_3.jpg" alt="" class="swipe-img"></swiper-slide>
      </swiper>
    </div> -->
    <ul style="display: flex">
      <li v-for="item in list">{{item}}</li>
    </ul>
    <div class="product-show">
      <div class="main-show">产品展示</div>
      <ul class="product-swarp">
        <li>
          <img src="../../static/image/product-1.jpg" alt="" class="product-img">
          <div class="product">一位数码管</div>
        </li>
        <li>
          <img src="../../static/image/product-2.jpg" alt="" class="product-img">
          <div class="product">两位数码管</div>
        </li>
        <li>
          <img src="../../static/image/product-3.jpg" alt="" class="product-img">
          <div class="product">三位数码管</div>
        </li>
        <li>
          <img src="../../static/image/product-4.jpg" alt="" class="product-img">
          <div class="product">四位数码管</div>
        </li>
        <li>
          <img src="../../static/image/product-1.jpg" alt="" class="product-img">
          <div class="product">一位数码管</div>
        <li>
          <img src="../../static/image/product-2.jpg" alt="" class="product-img">
          <div class="product">两位数码管</div>
        </li>
        <li>
          <img src="../../static/image/product-3.jpg" alt="" class="product-img">
          <div class="product">三位数码管</div>
        </li>
        <li>
          <img src="../../static/image/product-4.jpg" alt="" class="product-img">
          <div class="product">四位数码管</div>
        </li>
        </li>
      </ul>
    </div>
    <div class="example">
      <div class="main-example">应用案例</div>
      <div class="main">
        <div class="example-warp">
          <div class="main-img">
            <img src="../../static/image/example-1.jpg" alt="" class="">
          </div>
          <div class="text">
            <div class="title">案例名称</div>
            <div class="main-text">
              公司引进全套自动生产设备及电脑检测仪器，主要原材料均从台湾、美国等地直接采购。本公司现有员工300余人，且拥有一批经验丰富的技术管理人才和训练有素的生产队伍。
            </div>
          </div>
        </div>
        <div class="example-warp">
          <div class="main-img">
            <img src="../../static/image/example-2.jpg" alt="" class="">
          </div>
          <div class="text">
            <div class="title">案例名称</div>
            <div class="main-text">
              公司引进全套自动生产设备及电脑检测仪器，主要原材料均从台湾、美国等地直接采购。本公司现有员工300余人，且拥有一批经验丰富的技术管理人才和训练有素的生产队伍。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="company">
      <div class="main-example">关于我们</div>
      <div class="info">
        深圳市敏源光电有限公司,成立于2007年，公司集LED研发、制造、销售于一体，主要致力于高亮度、高性能的各色LED数码管、数码屏、点阵模块、直插和贴片式发光二极管等LED全系列的研发及制造，并积极研发用于户内外显示、装饰及照明灯具各方面的高品质LED。
        公司成立以来，不断引进日本、台湾、韩国等全自动固晶焊线及灌胶精密先进设备。产品原辅料主要从美国、日本、台湾进口，产品检测采用全球先进全自动分光分色系统。并且有经验丰富、技术精湛的工程研发队伍。
        本厂秉着“以技术为先导，以管理为基础，以品质为目的，以客户满意为宗旨”的理念，为求以高品质、长寿命的LED产品提供给每一个客户，以灵活的经营方式，优惠合理的价格，完善的售后服务来满足不同客户的需求。
        我们不是最大的，但一定是最好的，愿与海内外广大客户结盟，共创辉煌灿烂的明天。
      </div>
    </div>
  </div>
</template>

<script>
  import VConsole from 'vconsole';
  export default {
    name: 'index',
    data() {
      return {
        list: [],
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        },
      }

    },
    mounted() {

      this.axios({
        type: 'get',
        url: 'http://192.168.1.3:3000/users'
      }).then(res => {
        this.list = res.data.map(item => {
          return item.name
        })
        console.log(res)
      })
      let vConsole = new VConsole();
      console.log("test");
    },
    methods: {


    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    height: calc(100vh - 2.8rem);
    margin-top: 1.8rem;
    overflow: auto;

  }

  .swarp {
    width: 100%;
    height: 4rem;
  }

  .swipe-img {
    width: 100%;
    height: 4rem;
  }

  .product-show {
    width: 100%;
    overflow: hidden;
  }

  .main-show {
    padding: .28rem 0 .28rem .4rem;
    width: 100%;
    color: #0092D5;
    font-size: .35rem;
    background-color: #F4F4F4
  }

  .product-swarp {
    margin-top: .28rem;
    display: flex;
    justify-content: space-around;
    width: 250%;
    margin-left: -125%;
    -webkit-animation: mymove 20s linear infinite;
    animation: mymove 20s linear infinite;
  }

  @keyframes mymove {
    from {
      -webkit-transform: translate(0)
    }

    to {
      -webkit-transform: translate(50%)
    }
  }

  .product-swarp li {
    width: 2.7rem;
  }

  .product-img {
    width: 100%;
  }

  .product {
    background-color: #F4F4F4;
    font-size: .25rem;
    width: 100%;
    text-align: center;
  }

  .example {
    width: 100%;
    margin-top: .28rem
  }

  .main-example {
    padding: .28rem 0 .28rem .4rem;
    width: 100%;
    color: #0092D5;
    font-size: .35rem;
    background-color: #F4F4F4
  }

  .main {
    width: 100%;
    padding: 0 10px;
  }

  .example-warp {
    margin-top: 10px;
    width: 100%;
    display: flex;
  }

  .text {
    margin-left: 10px;
  }

  .title {
    font-size: .3rem;
    color: #0092D5;
  }

  .main-text {
    font-size: .24rem;
    color: rgba(0, 0, 0, .7);
    line-height: .5rem;
  }

  .company {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 1rem;
  }

  .info {
    color: rgba(0, 0, 0, .8);
    font-size: .3rem;
    padding: .4rem;
    line-height: .6rem;
    text-indent: 2em;
    background: url('../../static/image/map.jpg')no-repeat;
    background-position-x: 5rem;
    background-position-y: bottom;
    background-size: 4rem;
  }

</style>

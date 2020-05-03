<template>
  <div class="introduction">
    <div class="main-example"> 公司简介</div>
    <div class="conent">深圳市敏源光电有限公司,成立于2007年，公司集LED研发、制造、销售于一体，主要致力于高亮度、高性能的各色LED数码管、数码屏、点阵模块、直插和贴片式发光二极管等LED全系列的研发及制造，并积极研发用于户内外显示、装饰及照明灯具各方面的高品质LED。
      公司成立以来，不断引进日本、台湾、韩国等全自动固晶焊线及灌胶精密先进设备。产品原辅料主要从美国、日本、台湾进口，产品检测采用全球先进全自动分光分色系统。并且有经验丰富、技术精湛的工程研发队伍。 本厂秉着“以技术为先导，以管理为基础，以品质为目的，以客户满意为宗旨”的理念，为求以高品质、长寿命的LED产品提供给每一个客户，以灵活的经营方式，优惠合理的价格，完善的售后服务来满足不同客户的需求。
      我们不是最大的，但一定是最好的，愿与海内外广大客户结盟，共创辉煌灿烂的明天。
    </div>


  </div>
</template>

<script>
  export default {
    name: 'introduction',
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .introduction {
    height: calc(100vh - 2.8rem);
    margin-top: 1.8rem;
    overflow: auto;
  }

  .main-example {
    padding: .28rem 0 .28rem .4rem;
    width: 100%;
    color: #0092D5;
    font-size: .35rem;
    background-color: #F4F4F4
  }
 .conent{
    height:calc(100% - 1.04rem);
    color: rgba(0, 0, 0, .8);
    font-size: .3rem;
    padding:.4rem;
    line-height:.6rem;
    text-indent: 2em;
    background: url('../../static/image/timg.jpg')no-repeat;
    /*background-position-x: 5rem;*/
    background-position-y: bottom;
    background-size: 100%;
 }
</style>

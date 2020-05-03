<template>
  <div class="connection">
    <div class="main-example"> 公司地址</div>
    <div class="map">
      <img src="../../static/image/map_1.png" alt="" class="">
    </div>
    <div class="conent">
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
</template>

<script>
  export default {
    name: 'connection',
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .connection {
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

  .map {
    width: 100%;
    height: 5rem;
    overflow: hidden
  }

  .map img {
    width: 100%;
  }

  .conent {
    color: rgba(0, 0, 0, .8);
    font-size: .3rem;
    padding: 10px;
  }

</style>

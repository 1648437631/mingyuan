<template>
  <div id="app">
    <div style="height: 50px;width: 100%;background: red"></div>>
    <header>
      <img src="../static/image/logo.jpg" class="logo">
      <span class="name">敏源光电有限公司</span>
    </header>
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/introduction">公司简介</router-link>
      <router-link to="/product">主要产品</router-link>
      <router-link to="/connection">联系我们</router-link>
      </li>
    </div>
    <router-view/>
    
    <footer>
      <div class="footer-swrper">
        <div class="footer-nav">
          <router-link to="/">首页</router-link>
          <span>|</span>
          <router-link to="/introduction">公司简介</router-link>
          <span>|</span>
          <router-link to="/product">主要产品</router-link>
          <span>|</span>
          <router-link to="/connection">联系我们</router-link>
        </div>
        <div class="copyright-info"><span>Copyright © 2018 敏源光电有限公司版权所有</span></div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: normal;
    -webkit-overflow-scrolling: touch;
  }

  html {
    font-size: 10vw;
    color: #999;
    font-family: '微软雅黑';
  }

  textarea {
    font-family: 微软雅黑;
  }

  a {
    text-decoration: none;
  }

  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  input {
    outline: none;
  }

  ol,
  ul {
    list-style: none;
  }
  img{
   vertical-align: bottom
  }
 

  *::-webkit-scrollbar-button:start:decrement,
  *::-webkit-scrollbar-button:end:increment {
    height: 0;
    background-color: transparent;
  }

  *::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
  }
 *::-webkit-scrollbar {
    width: 0px !important;
    display:none;
  }
  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    z-index:1000;
  }

  .logo {
    width: 1rem;
  }

  .name {
    font-size: .4rem;
    letter-spacing: 4px;
    color: #008B00;
    margin-left: 40px;
  }

  .nav {
    position: fixed;
    top: 1rem;
    width: 100%;
    height: .8rem;
    background-color: #00CD00;
    display: flex;
    z-index:1000;
  }
  .nav a {
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .3rem;
    color: #fff;
  }

  footer {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    background-color: #00CD00;
    text-align: center;
    display: flex;
    align-items: center
  }

  .footer-swrper {
    width: 100%;
  }

  .footer-nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 5px 20%;
  }

  .footer-nav a,
  span {
    color: #fff;
    font-size: .2rem;
  }

  .copyright-info {
    width: 100%;
    font-size: .2rem;
  }
.nav .router-link-exact-active{
background-color: #008B00;
}
</style>

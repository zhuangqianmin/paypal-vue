<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#dingding {
  iframe {
    #refreashQrCodeBtn {
      span {
        font-size: 30px;
      }
    }
  }
}
.clearfix {
  &::after,
  &::before {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
}
.ivu-spin-fix {
  position: fixed !important;
  z-index: 12 !important;
}
.ivu-form > .grey > .ivu-form-item-label {
  font-size: 14px;
  padding: 10px 8px 8px 0px !important;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.ivu-message-custom-content span {
  word-break: break-all;
}
</style>

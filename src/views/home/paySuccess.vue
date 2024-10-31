<template>
  <div class="error">
    <div class="content">
      <div class="text-wrap">
        <div>
          <span class="code">支払いに成功しました</span>
        </div>
        <div>
          <Button type="success" size="large" @click="goBakc()">GO BACK</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    goBakc(){
      if (this.isMobile()) {
        this.$router.replace('/app');
      } else {
        this.$router.replace('/');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.error {
  height: 100vh;
  background: #f1f2f6;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    width: 782px;
    height: 420px !important;

    .code {
      font-size: 30px;
      line-height: 85px;
    }
    
  }
}
</style>

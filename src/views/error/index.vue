<template>
  <div class="error">
    <div class="content">
      <img src="@/assets/img/error.jpg" />
      <div class="text-wrap">
        <div>
          <h1 class="code">{{ code }}</h1>
          <div class="text">{{ msg }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    code () {
      return this.$common.getUrlParam('code');
    },
    msg () {
      return decodeURIComponent(this.$common.getUrlParam('msg'));
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

    & > img {
      width: 100%;
    }
    .text-wrap {
      position: absolute;
      right: 70px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;

      .code {
        font-size: 85px;
        line-height: 85px;
      }
      .text {
        color: #838486;
        font-size: 22px;
      }
    }
  }
}
</style>

<template>
  <div class="error">
    <div class="content">
      <div class="text-wrap">
        <div>
          <span v-if="loading" class="code">{{ msg }}</span>
          <span v-else class="code">支払い中......</span>
        </div>
        <div>
          <Button v-if="loading" type="success" size="large" @click="goBakc()">リターンマッチ</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      msg:"",
      loading: false
    };
  },
  mounted() {
    this.loading = false;
    let paymentId = this.$route.query.paymentId; // John
    let payerId = this.$route.query.PayerID; // 30
    axios.post('/paypalShop/payment/execute', {
      "paymentId":paymentId,
      "payerId":payerId
    })
    .then(response => {
        // 处理响应
        console.log(response.data);
        this.loading = true;
        if (response.data.code == 0) {
          this.msg = "支払いに成功しました";
        } else {
          this.msg = "支払い失敗";
        }
    })
    .catch(error => {
      // 处理错误
      console.error(error);
    });
  },
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

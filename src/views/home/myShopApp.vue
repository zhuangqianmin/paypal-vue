<template>
  <div class="content">
    <div class="top">
      <div style="height: 53px;display: flex; justify-content: space-between; align-items: center;background-color:rgba(234,246,251,1);
">
        <Icon style="margin-left: 15px;" @click="topLinkOne()" type="ios-arrow-back" size = "15"/>
        <a href="https://line.me/ti/p/Ajhkq-KPnj" target="_blank">
          <p class="announcement-bar__message">{{ defaultMsg }}</p>
        </a>
        <Icon style="margin-right: 15px;" @click="topLinkOne()" type="ios-arrow-forward" size = "15"/>
      </div>
      <div>
        <img class="iconimg" src="@/assets/img/shop-icon.png" />
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;background-color:rgba(212,201,209,1);height: 60px;
">
        <Icon style="margin-left: 15px;" @click="topLinkTwo()" type="ios-arrow-back" size = "15"/>
        <p class="announcement-bar__message">
          {{ defaultMsg1 }}
        </p>
        <Icon style="margin-right: 15px;" @click="topLinkTwo()" type="ios-arrow-forward" size = "15"/>
      </div>
      <div>
        <img class="pgimg" src="@/assets/img/goods.png" />
      </div>
    </div>
    <div class="center">
        <div>
          <div style="text-align: center;margin-top:20px;margin-bottom: 10px;">
            <img style="width: 80%;" class="pgimg-left" src="@/assets/img/left.png" />
          </div>
          <div style="font-size: 10px;text-align: left;margin-left: 10px;">A R T E T R I B E</div>
          <div style="font-size: 35px;text-align: left;margin-left: 10px;">TikTok ライブでカップステッカーを選ぶ</div>
          <div style="font-size: 17px;text-align: left;margin-left: 10px;">
            <span style="font-weight: bold;">¥{{ money }} JPY&nbsp;&nbsp;</span>
            <span style="background-color: rgba(201,195,251,1);margin-left: 10px;border-radius: 5px;" >&nbsp;&nbsp;セール&nbsp;&nbsp;</span>
          </div>
          <div style="text-align: left;margin-left: 10px;">
            <span style="text-decoration: underline;">配送料</span>
            <span>はチェックアウト時に計算されます。</span>
          </div>
          <div style="font-size: 15px;margin-top: 20px;text-align: left;margin-left: 10px;">BD</div>
          <div style="text-align: left;margin-left: 10px;">
            <Button class="button-info" type="info" size="large">¥5500</Button>
          </div>
          <div style="font-size: 15px;margin-top: 20px;text-align: left;margin-left: 10px;">数量</div>
          <div style="font-size: 20px;text-align: left;margin-left: 10px;margin-top: 5px;">
            <Input type="number" @on-change="changNum(num)" v-model="num" size="large" placeholder="1" style="width: 150px"/>
          </div>
          <div style="text-align: center;margin: 0 10px 0 10px;">
            <Button type="success" style="text-align: center;width: 100%;margin-top: 20px;margin-bottom: 50px;" class="button-info" size="large" @click="payMoney()" long>
              <span v-if="!loading">
                <img class="but-img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"/>
              </span>
              <span v-else>Loading...</span>
            </Button>
          </div>
        </div>
    </div>
    <div class="foot">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import JsEncrypt from 'jsencrypt';
export default {
  data () {
    return {
      rsaPublicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIOwrofI1HzjE+NWo7gpfrjUaGAx3LqTBEtcujzQNQjvjIDYN+vKooiJH+H2ig02EVb+45dolDMgq/DFJIpfLyzKk6WtCHZAuiyynJ67kB8/Eth/REI7rKAbC1PEWmoFEQLdiDDkHzpl3SUTPk2lNQOoyA5bCpeocYDL6ol2loJQIDAQAB",
      num:1,
      money:0,
      pic:0,
      loading: false,
      defaultMsg:"📱お問い合わせはLINEで行ってください",
      topLink1:"📱お問い合わせはLINEで行ってください",
      topLink2:"Welcome to our store",
      defaultMsg1:"🚁5500円以上場合日本の全国的に送料無料.🚁",
      topLink3:"🚁5500円以上場合日本の全国的に送料無料.🚁",
      topLink4:"🌠アーティトライブでDIYに没頭しましょう - クラフト、つながり、創造"
    };
  },
  mounted() {
    this.changPic(5500);
    this.startTimer();
  },
  methods: {
    changPic(pic){
      this.pic = pic;
      this.money = this.num*this.pic;
    },
    changNum(num){
      const regex = /^[1-9]\d*$/;
      if (!regex.test(num)) {
        this.num = 1;
      }
      if (num < 0) {
        this.num = 1;
      }
      if(this.num == undefined || this.num == 0){
        this.num = 1;
      }
      this.money = this.num*this.pic;
    },
    payMoney(){
      let _this =this;
      if (this.loading) {
        return;
      }
      if (_this.money == 0) {
        this.$Message.warning('金額を選択してください！');
        return;
      }
      this.loading = true;
      axios.post('/paypalShop/payment', {
        "z":this.RSAencrypt(_this.money+'')
      })
      .then(response => {
          // 处理响应
          console.log(response.data);
          if (response.data.code == 0) {
            window.location.href = response.data.content;
          }
      })
      .catch(error => {
      // 处理错误
      console.error(error);
      });
    },
    topLinkOne(){
      if (this.defaultMsg == "Welcome to our store") {
        this.defaultMsg = this.topLink1;
      } else {
        this.defaultMsg = this.topLink2;
      }
    },
    topLinkTwo(){
      if (this.defaultMsg1.includes("5500")) {
        this.defaultMsg1 = this.topLink4;
      } else {
        this.defaultMsg1 = this.topLink3;
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.topLinkTwo();
      }, 3000); // 每秒触发一次
    },
    RSAencrypt(pas){
      //实例化jsEncrypt对象
      let jse = new JsEncrypt();
      //设置公钥
      jse.setPublicKey(this.rsaPublicKey);
      return jse.encrypt(pas);
    }
  }
};
</script>
<style lang="less" scoped>
.announcement-bar__message {
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    padding: 1rem 0;
    margin: 0;
    letter-spacing: .1rem;
    min-height: 3.8rem;
    transform: translateY(10%);
}
.top {
  /* 其他样式，比如定义高度、宽度等 */
  height: 20%; /* 根据需要设置高度 */
  width: 100%;
}
.iconimg {
  background-repeat: no-repeat;            /* 防止背景重复 */
    background-size: contain;                 /* 横向适应，纵向自适应 */
    background-position: center;              /* 背景居中 */
    width: 27%;                            /* 设置宽度为视口宽度 */
    height: auto;                            /* 高度自适应 */
    height: 10%;
}
.pgimg {
  background-repeat: no-repeat;            /* 防止背景重复 */
    background-size: contain;                 /* 横向适应，纵向自适应 */
    background-position: center;              /* 背景居中 */
    width: 100vw;                            /* 设置宽度为视口宽度 */
    height: auto;                            /* 高度自适应 */
}
.center{
  display: flex;                  /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 左右两侧元素之间的间距 */
  align-items: stretch;           /* 使子元素高度一致 */
  width: 100%;                    /* 容器宽度为100% */
  height: 50vw;                  /* 设置容器高度，可以根据需要调整 */
}
.pg-left{
  flex: 1;                        /* 左侧占据剩余空间 */
  // background-color: #f0f0f0;     /* 左侧背景颜色 */
  padding: 20px;                  /* 内边距 */
  margin-left: 15%;
}
.pgimg-left{
  background-repeat: no-repeat;            /* 防止背景重复 */
    background-size: contain;                 /* 横向适应，纵向自适应 */
    background-position: center;              /* 背景居中 */
    width: 100%;                            /* 设置宽度为视口宽度 */
    height: auto;                            /* 高度自适应 */
}
.pg-right{
  flex: 1;                        /* 右侧占据剩余空间 */
  // background-color: #d0d0d0;     /* 右侧背景颜色 */
  padding: 20px;                  /* 内边距 */
  margin-right: 15%;
  text-align: left;
}
.foot{
  text-align: center;
  height: 60%; /* 根据需要设置高度 */
  width: 100%;
}
.button-info{
  size: large;
  margin-right: 5px;
  margin-top: 5px;
  align-items: center;    /* 垂直居中 */
}
.but-img{
  margin-top: 5px;
}
</style>

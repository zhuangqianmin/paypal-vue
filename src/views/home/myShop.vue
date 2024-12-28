<template>
  <div class="content">
    <div class="top">
      <img class="pgimg" src="@/assets/img/top.png" />
    </div>
    <div class="center">
        <div class="pg-left">
          <img class="pgimg-left" src="@/assets/img/left.jpg" />
        </div>
        <div class="pg-right">
          <div style="font-size: 50px;">{{ $t("goods.name") }}</div>
          <div style="font-size: 30px;margin-top: 20px;">¥{{ money }} JPY</div>
          <div style="font-size: 20px;margin-top: 30px;">BD</div>
          <div>
            <Button class="button-info" size="large" @click="changPic(5500)" :type="butArr.but1">¥5500</Button>
            <Button class="button-info" size="large" @click="changPic(110)" :type="butArr.but2">¥110</Button>
            <Button class="button-info" size="large" @click="changPic(180)" :type="butArr.but3">¥180</Button>
            <Button class="button-info" size="large" @click="changPic(10)" :type="butArr.but4">¥10</Button>
          </div>
          <div style="margin-top: 20px;">{{ $t("goods.count") }}</div>
          <div><Input type="number" @on-change="changNum(num)" v-model="num" size="large" placeholder="1" style="width: 150px"/></div>
          <div style="">
            <Button type="success" class="button-info" size="large" @click="payMoney()" long>
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
      butArr:{
        but1:"default",
        but2:"default",
        but3:"default",
        but4:"default"
      },
      num:1,
      money:0,
      pic:0,
      loading: false
    };
  },
  mounted () {
    if (this.isMobile()) {
      const { origin, pathname, search } = window.location;
      console.log(origin);
      console.log(pathname);
      console.log(`${origin}/app/${search}`);
      window.location.href = `${origin}/app/${search}`;
    } else {
      this.changPic(5500);
    }
  },
  methods: {
    isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    changPic(pic){
      this.pic = pic;
      this.money = this.num*this.pic;
      if (pic == 5500) {
        this.butArr.but1 = "info";
        this.butArr.but2 = "default";
        this.butArr.but3 = "default";
        this.butArr.but4 = "default";
      }
      if (pic == 110) {
        this.butArr.but1 = "default";
        this.butArr.but2 = "info";
        this.butArr.but3 = "default";
        this.butArr.but4 = "default";
      }
      if (pic == 180) {
        this.butArr.but1 = "default";
        this.butArr.but2 = "default";
        this.butArr.but3 = "info";
        this.butArr.but4 = "default";
      }
      if (pic == 10) {
        this.butArr.but1 = "default";
        this.butArr.but2 = "default";
        this.butArr.but3 = "default";
        this.butArr.but4 = "info";
      }
    },
    changNum(num){
      if (num < 0) {
        this.num = 1;
      }
      this.money = num*this.pic;
    },
    allowNum(event){
      const char = String.fromCharCode(event.which);
      if (!/[0-9]/.test(char)) {
          event.preventDefault();
      }
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
.top {
  /* 其他样式，比如定义高度、宽度等 */
  height: 20%; /* 根据需要设置高度 */
  width: 100%;
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
  margin-right: 20px;
  margin-top: 20px;
  align-items: center;    /* 垂直居中 */
}
.but-img{
  margin-top: 5px;
}
</style>

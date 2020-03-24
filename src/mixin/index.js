import { myConfirm } from "@/lib/utils";

// 预警实况页面 socket 逻辑
export const sosSocket = {
  data() {
    return {
      socket: null
    }
  },
  methods: {
    init() {
      // 实例化socket
      this.socket = new WebSocket(
        `ws://${this.$url}:21203/sos;${this.access_token};${this.id}`
      );
      // 监听socket连接
      this.socket.onopen = this.open;
      // 监听socket错误信息
      this.socket.onerror = this.error;
      // 监听socket消息
      this.socket.onmessage = this.getMessage;
      this.socket.onclose = this.close;
    },
    open() {
      // console.log("预警页面socket连接成功");
    },
    error() {
      console.log("连接错误");
      myConfirm("socket连接错误，是否尝试重连?",this.init,'您可以检查网络连接是否正常或者联系后台人员！');
    },
    getMessage(e) {
      // console.log(msg.data);
      //数据接收
      if (e.data ) {
        console.log("预警页面socket已连接");
        
        let resdata = JSON.parse(e.data);
        console.log(resdata);
        this.currentMarker.position = [resdata.lng, resdata.lat];
        this.center = this.currentMarker.position;
        this.currentMarker.contentRender = (h, instance) =>
          h(exampleComponents1, {
            props: {
              name: resdata.name,
              address: resdata.address,
              time: this.timeFormat(resdata.time),
              keyWord: "预警"
            }
          });
        setTimeout(this.getTodayWarnning.bind(this), 10000);
      }
    },
    send() {
      this.socket.send(params);
    },
    close() {
      console.log("预警页面socket已经关闭");
      this.socket = null
    },
    setBaseData(){
      this.setBaseInfo(this);
      this.init();
      this.firstRender();
    }
  }
}

// 机台综合页面 socket 逻辑
export const actForHome = {
  data() {
    return {
      websock: null
    }
  },
  methods: {
    setBaseData() {
      this.setBaseInfo(this);
      this.malNum = 0;
      this.falNum = 0;
      this.extend.yAxis.max = this.userList.length + 1;
      for (let i of this.userList) {
        if (i.gender == 0) {
          this.falNum++;
        } else {
          this.malNum++;
        }
      }
      this.malPercent = Math.round((this.malNum / this.userList.length) * 100);
      this.falPercent = 100 - this.malPercent;
      this.initWebSocket();
    },
    initWebSocket() {
      //初始化weosocket
      const wsuri = `ws://${this.$url}:21202/act;${this.access_token};${this.id}`;
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      let actions = {
        test: "12345"
      };
      this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror() {
      //连接建立失败重连
      console.log("socket连接失败");
      
      myConfirm("socket连接错误，是否尝试重连?",this.initWebSocket,'您可以检查网络连接是否正常或者联系后台人员！');
    },
    websocketonmessage(e) {
      //数据接收
      try {
        if (e.data) {
          console.log("综合页面socket已经连接");
        }
        let resdata = JSON.parse(e.data);
        resdata.map(item => {
          for (let i = 0; i < this.userList.length; i++) {
            if (item.mac === this.userList[i].mac) {
              this.$set(this.userList[i], "hr", item.hr); //
              this.$set(this.userList[i], "distance", item.ds);
              this.$set(this.userList[i], "sportCal", item.cl);
              this.$set(this.userList[i], "em", item.em);
              this.$set(this.userList[i], "gt", item.gt);
              this.$set(this.userList[i], "hbp", item.hbp);
              this.$set(this.userList[i], "lbp", item.lbp);
              this.$set(this.userList[i], "by", item.by); //电池
              this.$set(this.userList[i], "mac", item.mac);
              this.$set(this.userList[i], "rssi", item.rssi);
              this.$set(this.userList[i], "steps", item.st);
              this.$set(this.userList[i], "syt", item.syt);
              this.$set(this.userList[i], "st", item.st);
              this.$set(this.userList[i], "time", item.t ? item.t : 0);
              this.$set(this.userList[i], "isActive", this.isActive(item.t)); // 判断用户是否活跃
            }
          }
        });
        this.resetAgeData(this.userList);
        this.stepNumAvag();
        let activeList = this.userList.filter(item => {
          return item.isActive
        })
        this.activeNum = activeList.length;
      } catch (error) {
        console.log(error);
      }
    },
    websocketsend(Data) {
      //数据发送
      this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("综合页面socket断开连接");
    },
  }
}

// 实时活动页面
export const actForActive = {
  data() {
    return {
      socket: null
    }
  },
  methods: {
    // socket
    init() {
      // 实例化socket
      const wsuri = `ws://${this.$url}:21202/act;${this.access_token};${this.id}`;
      this.socket = new WebSocket(wsuri);
      // 监听socket连接
      this.socket.onopen = this.open;
      // 监听socket错误信息
      this.socket.onerror = this.error;
      // 监听socket消息
      this.socket.onmessage = this.getMessage;
      // 监听socket关闭
      this.socket.onclose = this.close;
    },
    getMessage(e) {
      //数据接收
      try {
        if (e.data) {
          console.log("实时活动页面socket已连接");
          let resdata = JSON.parse(e.data);
          for (let i = 0; i < this.userList.length; i++) {
            resdata.map(item => {
              if (item.mac === this.userList[i].mac) {
                this.$set(this.userList[i], "hr", item.hr); //
                this.$set(this.userList[i], "distance", item.ds);
                this.$set(this.userList[i], "totalCal", item.cl);
                this.$set(this.userList[i], "em", item.em);
                this.$set(this.userList[i], "gt", item.gt);
                this.$set(this.userList[i], "hbp", item.hbp);
                this.$set(this.userList[i], "lbp", item.lbp);
                this.$set(this.userList[i], "by", item.by); //电池
                this.$set(this.userList[i], "mac", item.mac);
                this.$set(this.userList[i], "rssi", item.rssi);
                this.$set(this.userList[i], "steps", item.st);
                this.$set(this.userList[i], "syt", item.syt);
                this.$set(this.userList[i], "time", item.t ? item.t : 0);
                if (
                  this.userList[i].deviceId == "Band" ||
                  this.userList[i].deviceId == "VOC" ||
                  this.userList[i].deviceId == "Thermo"
                ) {
                  this.$set(
                    this.userList[i],
                    "bp",
                    this.getBp(item.mac, item.t, item.hbp, item.lbp)
                  ); //体温
                }
              }
            });
            if (this.member.mac == this.userList[i].mac) {
              this.member.position = this.userList[i].position;
              this.member.hr = this.userList[i].hr;
              this.member.hbp = this.userList[i].hbp;
              this.member.lbp = this.userList[i].lbp;
              this.member.totalCal = this.userList[i].totalCal;
              this.member.steps = this.userList[i].steps;
            }
          }
          this.sortFunc();
          this.resetHrData(this.userList);
          this.resetStData(this.userList);
        }
      } catch (error) {
        console.log(error);
      }
    },
    open() {
      //连接建立之后执行send方法发送数据
      let actions = {
        test: "12345"
      };
    },
    error() {
      //连接建立失败重连
      console.log("连接错误");
      myConfirm("socket连接错误，是否尝试重连?",this.init,'您可以检查网络连接是否正常或者联系后台人员！');
    },
    send(Data) {
      //数据发送
      this.websock.send(Data);
    },
    close(e) {
      //关闭
      console.log("实时活动页面的socket断开连接");
    },
    setBaseData() {
      this.setBaseInfo(this);
      this.member = this.userList[0];
      this.sortFunc();
      this.resetHrData(this.userList);
      this.resetStData(this.userList);
      this.autoPage();
      this.alarmUpload();
      this.init();
    }
  }
}

export const actForSleep = {
  data() {
    return {
      websock: null
    }
  },
  methods: {
    setBaseData() {
      this.setBaseInfo(this);
      this.member = this.userList[0];
      this.sortFunc();
      this.resetSleepData(this.userList);
    },
    initWebSocket() {
      //初始化weosocket
      const wsuri = `ws://${this.$url}:21202/act;${this.access_token};${this.id}`;
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      // this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      let actions = {
        test: "12345"
      };
      this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror() {
      //连接建立失败重连
      console.log("连接错误");
      myConfirm("socket连接错误，是否尝试重连?",this.initWebSocket,'您可以检查网络连接是否正常或者联系后台人员！');
    },
    websocketonmessage(e) {
      //数据接收
      if (e.data) {
        console.log("睡眠页面socket已连接");
        
        let resdata = JSON.parse(e.data);
        for (let i = 0; i < this.userList.length; i++) {
          resdata.map(item => {
            if (item.mac === this.userList[i].mac) {
              this.$set(this.userList[i], "hr", item.hr); //
              this.$set(this.userList[i], "distance", item.ds);
              this.$set(this.userList[i], "sportCal", item.cl);
              this.$set(this.userList[i], "em", item.em);
              this.$set(this.userList[i], "gt", item.gt);
              this.$set(this.userList[i], "hbp", item.hbp);
              this.$set(this.userList[i], "lbp", item.lbp);
              this.$set(this.userList[i], "by", item.by); //电池
              this.$set(this.userList[i], "mac", item.mac);
              this.$set(this.userList[i], "rssi", item.rssi);
              this.$set(this.userList[i], "steps", item.st);
              this.$set(this.userList[i], "syt", item.syt);
              this.$set(this.userList[i], "time", item.t ? item.t : 0);
            }
          });
          if (this.member.mac == this.userList[i].mac) {
            this.member.position = this.userList[i].position;
            this.member.sleepTotal = this.userList[i].sleepTotal;
            this.member.startSleep = this.userList[i].startSleep;
            this.member.endSleep = this.userList[i].endSleep;
            this.member.lightSleep = this.userList[i].lightSleep;
            this.member.midSleep = this.userList[i].midSleep;
            this.member.deepSleep = this.userList[i].deepSleep;
          }
        }
        this.sortFunc(this.userList);
        this.resetSleepData(this.userList);
      }
    },
    websocketsend(Data) {
      //数据发送
      this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("睡眠页面socket断开连接", e);
    },
  }
}

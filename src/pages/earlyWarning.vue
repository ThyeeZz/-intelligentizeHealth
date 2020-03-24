<template>
  <div id="earlyWarning">
    <div class="map">
      <el-amap
        ref="map"
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="amap-demo"
      >
        <!-- 医院名字 -->
        <el-amap-marker
          vid="component-marker"
          :position="componentMarker.position"
          :content-render="componentMarker.contentRender"
        ></el-amap-marker>
        <!-- 医院标记 -->
        <el-amap-marker vid="component-marker1" :position="componentMarker1.position"></el-amap-marker>
        <!-- sos标记 -->
        <el-amap-marker
          :position="currentMarker.position"
          :events="currentMarker.events"
          :visible="currentMarker.visible"
          :draggable="currentMarker.draggable"
          :vid="currentMarker"
          :content-render="currentMarker.contentRender"
          v-if="showFlag"
        ></el-amap-marker>
        <!-- /查看制定标记 -->
        <el-amap-marker
          :position="specifiedMarker.position"
          :events="specifiedMarker.events"
          :visible="specifiedMarker.visible"
          :draggable="specifiedMarker.draggable"
          :vid="specifiedMarker"
          :content-render="specifiedMarker.contentRender"
          v-else
        ></el-amap-marker>
      </el-amap>
    </div>

    <div class="list_left">
      <div class="left_top">
        <p class="title">生命体征累心统计</p>
        <ul>
          <li class="listItem">
            <span class="desc" style="color: #fff;">今日社区活跃人数/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem" style="background-color: #2D2F56;">
            <span class="desc">睡眠7小时不足/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem">
            <span class="desc">活动6000步不足</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem" style="background-color: #2D2F56;">
            <span class="desc">心跳偏高超90/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem">
            <span class="desc">血压偏高/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem" style="background-color: #2D2F56;">
            <span class="desc">离开社区超过2小时/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem">
            <span class="desc">体温又异常/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem" style="background-color: #2D2F56;">
            <span class="desc">需要定期吃药/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem">
            <span class="desc">在房间超过20小时/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem" style="background-color: #2D2F56;">
            <span class="desc">活动时间低于45分钟/人</span>
            <span class="personNum">0</span>
          </li>
          <li class="listItem">
            <span class="desc">跑步15+分钟/人</span>
            <span class="personNum">0</span>
          </li>
        </ul>
      </div>
      <div class="left_bottom">
        <p class="title">突发健康危情列表</p>
        <div class="input_wrap">
          <input type="text" placeholder="请输入健康危情关键字" />
          <i class="el-icon-search"></i>
        </div>
        <div class="table">
          <table class="gridtable">
            <tr v-for="(item,index) of markerList" :key="index">
              <td width="20%" style="color: #33d5ff;">{{item.clingId}}</td>
              <td width="20%">{{item.name}}</td>
              <td width="40%">已报警&nbsp;{{item.count}}&nbsp;次</td>
              <td width="20%" class="checkWarning">
                <a
                  href="#"
                  class="checkWarning"
                  style="color: #fff"
                  @click="showSpecifiedWarning(index)"
                >查看</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="middle_head">
        <div class="head_left">今日预警</div>
        <div class="head_mid"></div>
        <div class="head_right">{{markerList.length}}人</div>
      </div>
      <div class="middle_content">
        <div class="progress_wrap">
          <p>
            <span>高危情况:</span>
            <span style="color: #F56C6C">0/0</span>
          </p>
          <el-progress :percentage="2" color=" #F56C6C" :format="format"></el-progress>
        </div>
        <div class="progress_wrap">
          <p>
            <span>紧急情况:</span>
            <span style="color: #E6A23C">0/0</span>
          </p>
          <el-progress :percentage="2" color="#E6A23C" :format="format"></el-progress>
        </div>
        <div class="progress_wrap">
          <p>
            <span>一般情况:</span>
            <span style="color: #67C23A">0/0</span>
          </p>
          <el-progress :percentage="2" color="#67C23A" :format="format"></el-progress>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="firstContent">
        <div class="title">健康预警实时状况</div>
        <div class="content-box healthWarn">
          <ul class="healthWarn-left">
            <li>
              <span>姓名</span>
              <span>--</span>
            </li>
            <li>
              <span>年龄</span>
              <span>--</span>
            </li>
            <li>
              <span>ID</span>
              <span>--</span>
            </li>
            <li>
              <span>类别</span>
              <span>--</span>
            </li>
            <li>
              <span>预警地址</span>
              <span>--</span>
            </li>
            <li>
              <span>今日步数</span>
              <span>--</span>
            </li>
            <li>
              <span>睡眠</span>
              <span>--</span>
            </li>
          </ul>
          <div class="healthWarn-right">
            <div class="time">
              <p>预警时间</p>
              <p>--</p>
            </div>
            <ul class="data">
              <li>
                <span class="heart"></span>
                <span>
                  <i>--</i>
                </span>
              </li>
              <li>
                <span class="temperature"></span>
                <span>
                  <i>--</i> ℃
                </span>
              </li>
              <li>
                <span class="breathe"></span>
                <span>
                  呼吸
                  <i>--</i>次
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="secondContent">
        <div class="title">实时医护联系及家人信息</div>
        <div class="content-box" style="height:2rem">
          <ul class="connection-title">
            <li class="active active-line">医护人员</li>
            <li>家人</li>
          </ul>
          <div>
            <table class="connection-content">
              <tr>
                <th>医生名字</th>
                <th>现在状态</th>
                <th>位置</th>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>---</td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="thirdContent">
        <div class="title">救护中心资源及调度</div>
        <div class="content-box rescueCentre">
          <ul>
            <li>
              <span>附近紧急救护医院</span>
              <span>--</span>
            </li>
            <li>
              <span>电话</span>
              <span>--</span>
            </li>
            <li>
              <span>可用救护车辆</span>
              <span>--辆</span>
            </li>
            <li>
              <span>联系医生</span>
              <span>--</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueAMap from "vue-amap";
import { AMapManager } from "vue-amap";
import { sosSocket } from "@/mixin";
import { formatH_M_S } from "@/lib/utils";
import { mapMutations } from "vuex"
var arrSort = require("arr-sort");
VueAMap.initAMapApiLoader({
  key: "ba2052b8c450a515a9b4764b9e12b0f4",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});
const exampleComponents = {
  template: `<div>翰临电子科技</div>`
};
const exampleComponents1 = {
  props: ["name", "address", "keyWord", "time"],
  template: `<div class="warning">
              <div class="warning_tag"></div>
              <div class="content">
                <div class="warning_head">{{keyWord}}</div>
                <div class="warning_body">
                  <p class="text1">
                    <span>患者：{{name}}</span>
                    <span>报警时间：{{time}}</span>
                  </p>
                  <p class="text2">地址：{{address}}</p>
                </div>
              </div>
             </div>`
};
export default {
  name: "EarlyWarning",
  mixins: [sosSocket],
  data() {
    return {
      showFlag: true,
      socket: null,
      patientInfo: {
        name: "朱二强",
        address: "上海市xx路xx号",
        keyWord: "预警"
      },
      offset: [-28, -22],
      zoom: 16,
      center: [121.62181, 31.24258],
      events: {
        init: o => {
          // console.log(o.getCenter());
          // console.log(this.$refs.map.$$getInstance());
          // o.getCity(result => {
          //   console.log(result);
          // });
          return null;
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          return null;
        }
      },
      plugin: [
        {
          pName: "MapType",
          defaultType: 1,
          events: {
            init: o => {}
          }
        }
      ],
      markerList: [],
      //显示当前sos点
      currentMarker: {
        position: [0, 0],
        visible: true,
        draggable: false,
        contentRender: (h, instance) =>
          h(exampleComponents1, {
            props: {
              name: "--",
              address: "--",
              keyWord: "预警",
              time: "--"
            }
          })
      },
      specifiedMarker: {
        position: [0, 0],
        visible: true,
        draggable: false,
        contentRender: (h, instance) =>
          h(exampleComponents1, {
            props: {
              name: "--",
              address: "--",
              keyWord: "预警",
              time: "--"
            }
          })
      },
      //普华医院标志渲染函数
      componentMarker: {
        position: [121.62141, 31.24278],
        contentRender: (h, instance) =>
          h(
            exampleComponents,
            {
              style: {
                backgroundColor: "#fff",
                "font-size": ".26rem",
                width: "2.4rem",
                height: ".4rem",
                "text-align": "center"
              }
            },
            ["xxxxxxx"]
          )
      },
      //普华医院标记渲染函数
      componentMarker1: {
        position: [121.62181, 31.24258]
      }
    };
  },
  methods: {
    ...mapMutations(["setBaseInfo"]),
    format() {
      return "";
    },
    showSpecifiedWarning(index) {
      this.showFlag = false;
      this.specifiedMarker.position = this.markerList[index].position;
      this.center = this.markerList[index].position;
      this.specifiedMarker.contentRender = (h, instance) =>
        h(exampleComponents1, {
          props: {
            name: this.markerList[index].name,
            address: this.markerList[index].address,
            keyWord: this.markerList[index].keyWord,
            time: this.markerList[index].time
          }
        });
    },
    
    getTodayWarnning() {
      let markerList = [];
      this.getRequest("api/sos/today").then(res => {
        let resualt = res.data.data;
        if (resualt) {
          resualt.map(item => {
            this.markerList.push({
              address: item.address,
              clingId: item.clingId,
              count: item.count,
              gender: item.gender == 0 ? "女" : item.gender == 1 ? "男" : "",
              mac: item.mac,
              name: item.name,
              time: formatH_M_S(item.time),
              timeStemp: item.time,
              position: [item.lng, item.lat],
              keyWord: "预警"
            });
          });
        }
      });
      markerList = arrSort(markerList, [{ attr: "timeStemp" }]);
      this.markerList = markerList;
      return markerList;
    },
    async firstRender() {
      let result = await this.getTodayWarnning();
      if (result.length !== 0) {
        let newArr = this.markerList;
        let len = newArr.length;
        let currentObj = newArr[len - 1];
        this.currentMarker.position = currentObj.position;
        this.center = this.currentMarker.position;
        this.currentMarker.contentRender = (h, instance) =>
          h(exampleComponents1, {
            props: {
              name: currentObj.name,
              address: currentObj.address,
              time: currentObj.time,
              keyWord: "预警"
            }
          });
      }
    },
    // 引入websocket 类，初始化实例

    closeSocket() {
      if (this.socket) {
        this.socket.close();
        this.socket = null;
      }
    }
  },
  mounted() {
    this.setBaseData();
    window.onbeforeunload = e => {
      this.closeSocket();
    };
  },

  beforeDestroy() {
    // 销毁监听
    this.closeSocket();
  }
};
</script>
<style lang="scss" scoped>
#earlyWarning /deep/ {
  width: 19.2rem;
  height: 9.54rem;
  box-sizing: border-box;
  position: relative;
  font-size: 0.26rem;
  .map {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .list_left {
    width: 5rem;
    height: 9.54rem;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.3rem;
    color: #fff;
    .left_top {
      width: 4.4rem;
      height: 4.6rem;
      box-sizing: border-box;
      background-color: rgba(33, 35, 73, 0.85);
      .title {
        width: 100%;
        height: 0.4rem;
        background-color: #1878f1;
        text-align: center;
        line-height: 0.4rem;
      }
      ul {
        width: 100%;
        height: 4.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 0.1rem 0;
        .listItem {
          width: 100%;
          display: flex;
          height: 0.37rem;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          padding: 0 0.2rem;
          font-size: 0.18rem;
          .desc {
            width: 3.2rem;
            color: #33d5ff;
          }
          .personNum {
            width: 0.2rem;
          }
        }
      }
    }
    .left_bottom {
      width: 4.4rem;
      height: 4rem;
      box-sizing: border-box;
      background-color: rgba(33, 35, 73, 0.85);
      .title {
        width: 100%;
        height: 0.4rem;
        background-color: #1878f1;
        text-align: center;
        line-height: 0.4rem;
      }
      .input_wrap {
        width: 100%;
        height: 0.6rem;
        padding: 0.1rem 0.1rem;
        box-sizing: border-box;
        position: relative;

        input {
          width: 100%;
          height: 0.4rem;
          border: 1px solid #1878f1;
          outline: none;
          background-color: rgba(0, 0, 0, 0);
          border-radius: 20px;
          box-sizing: border-box;
          padding: 0 0.2rem;
          color: #fff;
        }
        i {
          position: absolute;
          right: 0.2rem;
          top: 0.2rem;
        }
      }
      .table {
        width: 100%;
        height: 3rem;
        overflow: auto;
        font-size: 0.18rem;
        table.gridtable {
          font-family: verdana, arial, sans-serif;
          color: #fff;
        }
        table.gridtable tr {
          width: 100%;
        }
        table.gridtable td {
          padding: 8px;
          height: 0.4rem;
          text-align: center;
        }
      }
    }
  }
  .middle {
    width: 5rem;
    height: 2.2rem;
    position: absolute;
    bottom: 0.2rem;
    left: 5.2rem;
    box-sizing: border-box;

    color: #fff;
    .middle_head {
      width: 100%;
      height: 0.5rem;
      display: flex;
      align-items: center;
      margin-bottom: 0.1rem;
      .head_left {
        width: 2.3rem;
        height: 0.5rem;
        background-color: #1977f1;
        text-align: center;
        line-height: 0.5rem;
      }
      .head_mid {
        width: 0;
        height: 0;
        border: 0.25rem solid;
        border-color: #1977f1 #22263f #22263f #1977f1;
      }
      .head_right {
        width: 2.3rem;
        height: 0.5rem;
        background-color: #22263f;
        text-align: right;
        line-height: 0.5rem;
        box-sizing: border-box;
        padding-right: 0.2rem;
      }
    }
    .middle_content {
      background-color: rgba(33, 35, 73, 0.85);
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 0 0.1rem;
      .progress_wrap {
        font-size: 0.22rem;
        display: flex;
        height: 0.5rem;
        width: 100%;
        margin-left: 0.5rem;
        align-items: center;
        p {
          width: 1.8rem;
        }
        .el-progress {
          width: 3.1rem;
          .el-progress-bar__outer {
            width: 100%;
          }
        }
      }
    }
  }

  .main-right {
    width: 5rem;
    height: 9.54rem;
    position: absolute;
    right: 0;
    top: 0.3rem;
    bottom: 0;
    box-sizing: border-box;
    z-index: 10000;
    color: #fff;
    font-size: 0.18rem;
    .content-box {
      margin-top: 0.05rem;
      background: rgba(32, 35, 71, 0.85);
    }
    .healthWarn {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      height: 2.38rem;
      padding: 0.2rem 0.1rem;
    }
    .healthWarn-left {
      width: 2.1rem;
      li {
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem;
        height: 0.3rem;
        &:nth-of-type(2n) {
          background: rgba(50, 52, 94, 0.7);
        }
        span:first-child {
          color: #33d5ff;
        }
      }
    }
    .heart {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      background-image: url("../assets/hicling/heart.png");
      background-size: contain;
    }
    .breathe {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      background-image: url("../assets/hicling/breathe.png");
      background-size: contain;
    }
    .temperature {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      background-image: url("../assets/hicling/temperature.png");
      background-size: contain;
    }
    .healthWarn-right {
      width: 2.1rem;
      .time {
        padding-left: 0.1rem;
        background: rgba(50, 52, 94, 0.7);
        p:first-child {
          color: #5093da;
        }
      }
      .data {
        margin-top: 0.1rem;
        padding-left: 0.06rem;
        background: rgba(209, 50, 61, 0.7);
        border-radius: 0.06rem;
        li {
          display: flex;
          align-items: center;
          height: 0.45rem;
          span:last-child {
            margin-left: 0.23rem;
            i {
              font-size: 0.35rem;
              font-weight: bold;
            }
          }
        }
      }
    }
    .secondContent {
      margin-top: 0.24rem;
      .connection-title {
        display: flex;
        border-bottom: 1px solid rgba(25, 119, 242, 0.4);
        li {
          position: relative;
          height: 0.36rem;
          line-height: 0.36rem;
          width: 1rem;
          text-align: center;
          color: #5093da;
        }
        .active {
          color: #fff;
          border-bottom: 0.04rem solid rgba(55, 95, 255, 1);
        }
      }
      .connection-content {
        margin-top: 0.14rem;
        margin-left: 0.18rem;
        border-spacing: none;
        th {
          width: 1rem;
          color: #33d5ff;
          text-align: left;
        }
        td {
          width: 1rem;
          text-align: left;
        }
      }
    }
    .thirdContent {
      margin-top: 0.16rem;
      .rescueCentre {
        box-sizing: border-box;
        padding: 0.16rem 0;
        li {
          display: flex;
          justify-content: space-between;
          height: 0.3rem;
          padding: 0 0.2rem;
          &:nth-of-type(2n + 1) {
            background: rgba(33, 35, 73, 0.85);
          }
          span:first-child {
            color: #33d5ff;
          }
        }
      }
    }
    .title {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      background-color: #1977f2;
      text-align: center;
      font-size: 0.26rem;
    }
  }

  .warning {
    font-size: 0.18rem;
    width: 4.3rem;
    height: 1.4rem;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: flex-start;
    .warning_tag {
      width: 0.3rem;
      height: 0.3rem;
      margin: 0 auto;
      background: url("../assets/hicling/new-location.png") center center
        no-repeat;
      background-size: contain;
    }
    .content {
      .warning_head {
        width: 4rem;
        height: 0.3rem;
        background-color: rgba(211, 51, 63, 0.85);
        margin-bottom: 2px;
      }
      .warning_body {
        width: 4rem;
        height: 1rem;
        background-color: rgba(33, 35, 73, 0.85);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 0.08rem 0.1rem;
        .text1 {
          height: 30%;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 0.1rem;
        }
        .text2 {
          height: 70%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
        }
      }
    }
  }
  .checkWarning:hover {
    color: #33d5ff !important;
  }
}
</style>

<template>
  <div id="earlyWarning">
    <div class="map-box">
      <el-amap
        ref="map"
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="amap-demo"
      >
      </el-amap>
    </div>
    <div class="content-contain">
      <div class="content-main">
        <div class="main-left">
          <div class="vitalSigns">
            <div class="title">生命体征类型统计</div>
            <ul class="vitalSigns-ul">
              <li>
                <p>今日社区总活跃人数</p>
                <p>
                  <span style="font-size:0.3rem;font-weight:bold;">235</span>
                  <span>人</span>
                </p>
              </li>
              <li>
                <span>睡眠7小时不足</span>
                <span>12</span>
              </li>
              <li>
                <span>活动6000步不足</span>
                <span>54</span>
              </li>
              <li>
                <span>心跳偏高超90</span>
                <span>21</span>
              </li>
              <li>
                <span>血压偏高</span>
                <span>18</span>
              </li>
              <li>
                <span>离开社区超过2小时</span>
                <span>4</span>
              </li>
              <li>
                <span>体温有异常</span>
                <span>3</span>
              </li>
              <li>
                <span>需要定时吃药</span>
                <span>86</span>
              </li>
              <li>
                <span>房间超过20小时</span>
                <span>36</span>
              </li>
              <li>
                <span>活动时间低于45分钟</span>
                <span>73</span>
              </li>
              <li>
                <span>跑步15+分钟</span>
                <span>27</span>
              </li>
            </ul>
          </div>
          <div class="healthWarning">
            <div class="title">突发健康危情列表</div>
            <div class="content">
              <div class="search-box">
                <input type="text" placeholder="请输入健康危情关键字">
                <span class="search-icon"></span>
              </div>
              <div>
                <table class="healthWarning-table">
                  <tr>
                    <td>WH056</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>血压高</td>
                    <td style="color:#FC353B">转送医院</td>
                    <td>
                      <span class="warn"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>WH123</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>睡眠不好</td>
                    <td>已处理</td>
                    <td>
                      <span class="sucess"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>WH087</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>体温高</td>
                    <td>已处理</td>
                    <td>
                      <span class="sucess"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>WH056</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>活动量少</td>
                    <td>已处理</td>
                    <td>
                      <span class="sucess"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>WH123</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>睡眠过长</td>
                    <td>已处理</td>
                    <td>
                      <span class="sucess"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>WH123</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>体温异常</td>
                    <td style="color:#FC353B">转送医院</td>
                    <td>
                      <span class="warn"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>WH123</td>
                    <td style="font-size:0.16rem;text-align:center">
                      <p>2018-09-30</p>
                      <p>19:29:31</p>
                    </td>
                    <td>活动量少</td>
                    <td>已处理</td>
                    <td>
                      <span class="sucess"></span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="main-center">
          <div class="todayWarn">
            <div class="title-box">
              <p>今日预警</p>
              <p>
                <span style="color:#4BF9FF">14</span>
                <span>人</span>
              </p>
            </div>
            <div class="todayWarn-content">
              <ul class="todayWarn-ul">
                <li>
                  <p>
                    <span>高危情况:</span>
                    <span style="color:#FC353B">2/14</span>
                  </p>
                  <p>
                    <span class="showprogress" style="width:15%;background-color:#FF444B"></span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>紧急情况:</span>
                    <span style="color:#E6761F">2/14</span>
                  </p>
                  <p>
                    <span class="showprogress" style="width:15%;background-color:#FF9340"></span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>一般情况:</span>
                    <span style="color:#179E5F">10/14</span>
                  </p>
                  <p>
                    <span class="showprogress" style="width:70%;background-color:#3CE998"></span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="newestWarn">
            <div class="title">最新预警</div>
            <div class="patient">
              <div class="patient-info">
                <img src="../assets/hicling/img-avater.png" alt class="img">
                <span class="name">朱谦</span>
                <span class="category">类别：血压高</span>
              </div>
            </div>
            <div class="doctor">
              <ul class="doctor-info">
                <li>
                  <img src="../assets/hicling/doctor-zhou.png" class="img">
                  <div>
                    <p class="flex-sb">
                      <span class="name">周医生</span>
                      <span class="phone-icon"></span>
                    </p>
                    <p class="phone-num">136-2523-2888</p>
                  </div>
                </li>
                <li>
                  <img src="../assets/hicling/doctor-zhen.png" class="img">
                  <div>
                    <p class="flex-sb">
                      <span class="name">周医生</span>
                      <span class="phone-icon"></span>
                    </p>
                    <p class="phone-num">136-2523-2888</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="warn-location"></div>
          </div>
        </div>
        <div class="main-right">
          <div class="firstContent">
            <div class="title">健康预警实时状况</div>
            <div class="content-box healthWarn">
              <ul class="healthWarn-left">
                <li>
                  <span>姓名</span>
                  <span>朱谦</span>
                </li>
                <li>
                  <span>年龄</span>
                  <span>78</span>
                </li>
                <li>
                  <span>ID</span>
                  <span>WH056</span>
                </li>
                <li>
                  <span>类别</span>
                  <span>血压高</span>
                </li>
                <li>
                  <span>预警地址</span>
                  <span>A5-404</span>
                </li>
                <li>
                  <span>今日步数</span>
                  <span>3832</span>
                </li>
                <li>
                  <span>睡眠</span>
                  <span>6hr25m</span>
                </li>
              </ul>
              <div class="healthWarn-right">
                <div class="time">
                  <p>预警时间</p>
                  <p>2018-09-30 11:23:34</p>
                </div>
                <ul class="data">
                  <li>
                    <span class="heart"></span>
                    <span>
                      <i>145</i>
                    </span>
                  </li>
                  <li>
                    <span class="temperature"></span>
                    <span>
                      <i>39.5</i> ℃
                    </span>
                  </li>
                  <li>
                    <span class="breathe"></span>
                    <span>
                      呼吸
                      <i>28</i>次
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
                    <td>周医生</td>
                    <td>空闲</td>
                    <td>A-303</td>
                  </tr>
                  <tr>
                    <td>吴医生</td>
                    <td>查房</td>
                    <td>A302</td>
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
                  <span>上海第七人民医院</span>
                </li>
                <li>
                  <span>电话</span>
                  <span>021-6875-4523</span>
                </li>
                <li>
                  <span>可用救护车辆</span>
                  <span>2辆</span>
                </li>
                <li>
                  <span>联系医生</span>
                  <span>周医生，135-2050-9071</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class='wrap'>
  </div> -->
</template>
<script>
export default {
  name: "EarlyWarning",
  data() {
    return {
      offset: [-28, -22],
      zoom: 18,
      center: [121.59996, 31.197646],
      events: {
        init: o => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          o.getCity(result => {
            console.log(result);
          });
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert("map clicked");
        }
      },
      plugin: [
        {
          pName: "MapType",
          defaultType: 1,
          events: {
            init: o => {
             
            }
          }
        }
      ],
      componentMarker2: {
        position: [121.59996, 31.197646]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style/minix.scss";
#earlyWarning {
  position: relative;
  width: 100%;
  min-height: 9.53rem;
  background-color: rgba(7, 7, 49, 1);
  color: #fff;
  font-size: 0.2rem;
  .map-box {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 7, 49, 1);
  }
  .content-contain {
    position: absolute;
    padding: 0.23rem 0 0.1rem 0.2rem;
    box-sizing: border-box;
    height: 100%;
    z-index: 999;
    .content-main {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
  .main-left {
    width: 4.6rem;
  }
  .vitalSigns-ul {
    background: rgba(35, 33, 75, 0.85);
    li {
      display: flex;
      justify-content: space-between;
      padding: 0 0.14rem;
      &:nth-of-type(2n + 1) {
        height: 0.4rem;
        line-height: 0.4rem;
      }
      &:nth-of-type(2n) {
        height: 0.3rem;
        background: rgba(50, 52, 94, 0.7);
      }
      span:first-child {
        color: #33d5ff;
      }
      p:first-child {
        font-size: 0.22rem;
      }
    }
  }
}
.title {
  width: 100%;
  height: 0.33rem;
  line-height: 0.33rem;
  background-color: #1977f2;
  text-align: center;
  font-size: 0.22rem;
}
.title-box {
  position: relative;
  width: 100%;
  height: 0.34rem;
  background-color: rgba(70, 85, 135, 1);
  p:first-child {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 0.14rem;
    padding-right: 0.14rem;
    height: 0.34rem;
    line-height: 0.34rem;
    background: rgba(25, 119, 242, 1);
    font-size: 0.22rem;
    color: #fff;
    &:after {
      @include triangle(0.17rem);
    }
  }
  p:last-child {
    position: absolute;
    bottom: 0;
    right: 0.1rem;
    span:first-child {
      font-size: 0.45rem;
      font-weight: bold;
    }
  }
}

.healthWarning {
  margin-top: 0.2rem;
  .content {
    padding: 0.2rem 0.1rem 0;

    background: rgba(35, 34, 76, 0.85);
  }
}
.search-box {
  position: relative;
  height: 0.4rem;
  border: 1px solid rgba(25, 119, 242, 1);
  border-radius: 0.3rem;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    text-align: center;
    color: #465587;
  }
  .search-icon {
    position: absolute;
    top: 0.04rem;
    right: 0.2rem;
    width: 0.32rem;
    height: 0.32rem;
    background-image: url("../assets/hicling/search.png");
    background-size: contain;
    cursor: pointer;
  }
}
.warn {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background-image: url("../assets/hicling/warn.png");
  background-size: contain;
}
.sucess {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background-image: url("../assets/hicling/success.png");
  background-size: contain;
}
.healthWarning-table {
  margin-top: 0.2rem;
  width: 100%;
  border-spacing: none;
}
.main-center {
  position: relative;
  margin-left: 0.26rem;
  width: 8.2rem;
  .todayWarn {
    position: absolute;
    bottom: 0;
    width: 4.52rem;
    .todayWarn-content {
      margin-top: 0.1rem;
      background: rgba(35, 34, 76, 0.85);
    }
  }
}
.newestWarn {
  position: absolute;
  width: 2.96rem;
  top: 3.5rem;
  right: 0;
  .title {
    height: 0.34rem;
    background: rgba(209, 50, 61, 1);
  }
  .patient {
    margin-top: 0.05rem;
    height: 1.1rem;
    background: rgba(9, 22, 67, 0.75);
    border: 1px solid rgba(252, 53, 59, 0.2);
    border-radius: 0.04rem;
  }
  .patient-info {
    position: relative;
    margin-top: 0.13rem;
    margin-left: 0.15rem;
    width: 2.6rem;
    height: 0.9rem;
    background-image: url("../assets/hicling/warn-person.png");
    background-size: cover;
    .img {
      position: absolute;
      top: 0.05rem;
      left: 0.05rem;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .name {
      position: absolute;
      top: 0.12rem;
      left: 1.4rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
    }
    .category {
      position: absolute;
      left: 1rem;
      bottom: 0.1rem;
    }
  }
  .doctor {
    position: relative;
    margin-top: 0.05rem;
  }
}
.doctor-info {
  position: absolute;
  right: 0;
  top: 0;
  li {
    display: flex;
    align-items: center;
    width: 2.36rem;
    height: 0.64rem;
    margin-bottom: 0.04rem;
    padding: 0 0.12rem;
    background: rgba(9, 22, 67, 0.75);
    border-radius: 0.04rem;
    .img {
      margin-right: 0.1rem;
      width: 0.46rem;
      height: 0.46rem;
      border-radius: 50%;
    }
    .name {
      color: #37f8ff;
    }
    .phone-num {
      font-weight: bold;
    }
  }
}
.phone-icon {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../assets/hicling/carePhone.png");
  background-size: cover;
}
.warn-location {
  position: absolute;
  width: 0.42rem;
  height: 0.6rem;
  left: -0.21rem;
  top: 1.4rem;
  background-image: url("../assets/hicling/new-location.png");
  background-size: contain;
}
.todayWarn-ul {
  padding: 0.2rem 0.15rem 0.1rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.3rem;
    p:first-child {
      display: flex;
      justify-content: space-around;
      width: 1.5rem;
    }
    p:last-child {
      width: 2.6rem;
      height: 0.14rem;
      background: rgba(70, 85, 135, 0.62);
      border-radius: 0.8rem;
    }
  }
}
.showprogress {
  display: block;
  height: 100%;
  border-radius: 0.8rem;
}
.main-right {
  margin-left: 0.92rem;
  width: 4.6rem;
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
  background-image: url("../assets/hicling/img/hr.png");
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
.wrap{
  background-image: url("../assets/img/bgImg4.jpg");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>

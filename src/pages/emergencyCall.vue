<template>
  <!-- <div id="emergencyCall">
    <div class="main-left">
      <div class="item">
        <div class="title-box">
          <p>今日紧急报警事件</p>
          <p>
            <span style="color:#DB75FF">28</span>
            <span>件</span>
          </p>
        </div>
        <div class="content-box" style="margin-top:0.2rem;height:1.6rem">
          <ve-histogram
            :data="todayChartData.chartData"
            :extend="todayChartData.extend"
            :tooltip-visible="false"
            :grid="todayChartData.grid"
            :colors="todayChartData.colors"
            :legend-visible="false"
            height="100%"
          ></ve-histogram>
        </div>
      </div>
      <div class="item" style="margin-top:0.4rem">
        <div class="title-box">
          <p>本月紧急报警事件</p>
          <p>
            <span style="color:#4BF9FF">416</span>
            <span>件</span>
          </p>
        </div>
        <div class="content-box" style="margin-top:0.2rem;height:1.6rem">
          <ve-histogram
            :data="monthChartData.chartData"
            :extend="monthChartData.extend"
            :tooltip-visible="false"
            :grid="monthChartData.grid"
            :colors="monthChartData.colors"
            :legend-visible="false"
            height="100%"
          ></ve-histogram>
        </div>
      </div>
      <div class="item" style="margin-top:0.4rem">
        <table class="monthWarn">
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>状态</th>
            <th>等级</th>
            <th>时间</th>
            <th>地址</th>
            <th>类型</th>
            <th>结果</th>
          </tr>
          <tr>
            <td>201810230811</td>
            <td>跌倒</td>
            <td>等待处理</td>
            <td style="color:#FC353B">危险</td>
            <td>2018-10-23</td>
            <td>A05</td>
            <td>房间活动跌倒</td>
            <td>待定</td>
          </tr>
          <tr>
            <td>201810230811</td>
            <td>头晕</td>
            <td>正在处理</td>
            <td style="color:#FFF67B">正常</td>
            <td>2018-10-23</td>
            <td>A104</td>
            <td>房间活动跌倒</td>
            <td>加急处理</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style="color:#FFF67B"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="item flex-sb" style="margin-top:0.4rem">
        <div class="item-left">
          <div class="title-box">
            <p>正在工作的紧急救护人员</p>
            <p>
              <span style="color:#4BF9FF">3</span>
              <span>人</span>
            </p>
          </div>
          <div class="content-box" style="margin-top:0.14rem">
            <table class="aid-info">
              <tr>
                <th>姓名</th>
                <th>联系方式</th>
                <th>工作时间</th>
              </tr>
              <tr>
                <td>周医生</td>
                <td>138-37650-9810</td>
                <td>8：00-17：00</td>
              </tr>
              <tr>
                <td>周医生</td>
                <td>138-37650-9810</td>
                <td>8：00-17：00</td>
              </tr>
              <tr>
                <td>周医生</td>
                <td>138-37650-9810</td>
                <td>8：00-17：00</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="item-right">
          <div class="title-box">
            <p>正在工作的紧急救护车辆</p>
            <p>
              <span style="color:#4BF9FF">2</span>
              <span>辆</span>
            </p>
          </div>
          <div class="content-box" style="margin-top:0.14rem">
            <table class="aid-info">
              <tr>
                <th>车牌</th>
                <th>联系方式</th>
              </tr>
              <tr>
                <td>沪AE 9813</td>
                <td>138-37650-9810</td>
              </tr>
              <tr>
                <td>沪AE 9813</td>
                <td>138-37650-9810</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div>
        <table class="incident">
          <tr>
            <th style="width:1.1rem;"></th>
            <th>最新事件</th>
            <th>发生时间</th>
            <th>事件位置</th>
          </tr>
          <tr>
            <td>
              <img
                src="http://file.hicling.com/pictures/user/avatar/5014041/20160615/55351f2cb1f54564981cd43b5c928e41_c_150x150.jpg"
                alt
                class="avater"
              />
            </td>
            <td>心脏不适，需要医生检查</td>
            <td>2018-10-23 19:26:43</td>
            <td>繁锦路934弄20号</td>
          </tr>
          <tr>
            <td>
              <img
                src="http://file.hicling.com/pictures/user/avatar/5014041/20160615/55351f2cb1f54564981cd43b5c928e41_c_150x150.jpg"
                alt
                class="avater"
              />
            </td>
            <td>心脏不适，需要医生检查</td>
            <td>2018-10-23 19:26:43</td>
            <td>繁锦路934弄20号</td>
          </tr>
          <tr>
            <td>
              <img
                src="http://file.hicling.com/pictures/user/avatar/5014041/20160615/55351f2cb1f54564981cd43b5c928e41_c_150x150.jpg"
                alt
                class="avater"
              />
            </td>
            <td>心脏不适，需要医生检查</td>
            <td>2018-10-23 19:26:43</td>
            <td>繁锦路934弄20号</td>
          </tr>
          <tr>
            <td>
              <img
                src="http://file.hicling.com/pictures/user/avatar/5014041/20160615/55351f2cb1f54564981cd43b5c928e41_c_150x150.jpg"
                alt
                class="avater"
              />
            </td>
            <td>心脏不适，需要医生检查</td>
            <td>2018-10-23 19:26:43</td>
            <td>繁锦路934弄20号</td>
          </tr>
          <tr>
            <td>
              <img
                src="http://file.hicling.com/pictures/user/avatar/5014041/20160615/55351f2cb1f54564981cd43b5c928e41_c_150x150.jpg"
                alt
                class="avater"
              />
            </td>
            <td>心脏不适，需要医生检查</td>
            <td>2018-10-23 19:26:43</td>
            <td>繁锦路934弄20号</td>
          </tr>
          <tr>
            <td>
              <img
                src="http://file.hicling.com/pictures/user/avatar/5014041/20160615/55351f2cb1f54564981cd43b5c928e41_c_150x150.jpg"
                alt
                class="avater"
              />
            </td>
            <td>心脏不适，需要医生检查</td>
            <td>2018-10-23 19:26:43</td>
            <td>繁锦路934弄20号</td>
          </tr>
        </table>
      </div>
      <div class="todayEvent">
        <div class="today">
          <p>今日事件</p>
          <p>
            <span>28</span>
            <span>件</span>
          </p>
        </div>
        <div class="red">
          <p>待处理</p>
          <p style="color:#FE3F80">7%</p>
        </div>
        <div class="blue">
          <p>正在处理</p>
          <p style="color:#4AECFF">28%</p>
        </div>
        <div class="green">
          <p>已解决</p>
          <p style="color:#8BFF46">65%</p>
        </div>
      </div>
      <div class="item flex-sb" style="margin-top:0.35rem">
        <div class="item-left">
          <div class="title-box" style="width:4.40rem">
            <p>今日报警事件分布</p>
            <p></p>
          </div>
          <div class="content-box" style="margin-top:0.34rem">
            <ul class="event-info">
              <li>
                <p>头晕/头疼</p>
                <p>
                  <v-progress :height="0.2" color="#FE3F80" :percentage="100"></v-progress>
                </p>
              </li>
              <li>
                <p>心脏疾病</p>
                <p>
                  <v-progress :height="0.2" color="#FE923F" :percentage="85"></v-progress>
                </p>
              </li>
              <li>
                <p>跌倒/行走不便</p>
                <p>
                  <v-progress :height="0.2" color="#53DF00" :percentage="76"></v-progress>
                </p>
              </li>
              <li>
                <p>血糖/糖尿病</p>
                <p>
                  <v-progress :height="0.2" color="#58DDFF" :percentage="60"></v-progress>
                </p>
              </li>
              <li>
                <p>体温/发烧</p>
                <p>
                  <v-progress :height="0.2" color="#4F00C6" :percentage="50"></v-progress>
                </p>
              </li>
              <li>
                <p>血压</p>
                <p>
                  <v-progress :height="0.2" color="#1977F2" :percentage="40"></v-progress>
                </p>
              </li>
              <li>
                <p>药物服用</p>
                <p>
                  <v-progress :height="0.2" color="#465587" :percentage="33"></v-progress>
                </p>
              </li>
              <li>
                <p>其它</p>
                <p>
                  <v-progress :height="0.2" color="#5093DA" :percentage="25"></v-progress>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="item-right">
          <div class="title-box" style="width:4.40rem">
            <p>本月报警事件分布</p>
            <p></p>
          </div>
          <div class="content-box" style="margin-top:0.34rem">
            <ul class="event-info">
              <li>
                <p>头晕/头疼</p>
                <p>
                  <v-progress :height="0.2" color="#FE3F80" :percentage="100"></v-progress>
                </p>
              </li>
              <li>
                <p>心脏疾病</p>
                <p>
                  <v-progress :height="0.2" color="#FE923F" :percentage="85"></v-progress>
                </p>
              </li>
              <li>
                <p>跌倒/行走不便</p>
                <p>
                  <v-progress :height="0.2" color="#53DF00" :percentage="76"></v-progress>
                </p>
              </li>
              <li>
                <p>血糖/糖尿病</p>
                <p>
                  <v-progress :height="0.2" color="#58DDFF" :percentage="60"></v-progress>
                </p>
              </li>
              <li>
                <p>体温/发烧</p>
                <p>
                  <v-progress :height="0.2" color="#4F00C6" :percentage="50"></v-progress>
                </p>
              </li>
              <li>
                <p>血压</p>
                <p>
                  <v-progress :height="0.2" color="#1977F2" :percentage="40"></v-progress>
                </p>
              </li>
              <li>
                <p>药物服用</p>
                <p>
                  <v-progress :height="0.2" color="#465587" :percentage="33"></v-progress>
                </p>
              </li>
              <li>
                <p>其它</p>
                <p>
                  <v-progress :height="0.2" color="#5093DA" :percentage="25"></v-progress>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="wrap"></div>
</template>
<script>
import VProgress from "@/component/VProgress";
export default {
  name: "EmergencyCall",
  components: {
    VProgress
  },
  data() {
    return {
      todayChartData: {
        chartData: {
          columns: ["小时", "人数"],
          rows: [
            { 小时: "1", 人数: 5 },
            { 小时: "2", 人数: 4 },
            { 小时: "3", 人数: 3 },
            { 小时: "4", 人数: 5 },
            { 小时: "5", 人数: 8 },
            { 小时: "6", 人数: 9 },
            { 小时: "1", 人数: 5 },
            { 小时: "2", 人数: 4 },
            { 小时: "3", 人数: 6 },
            { 小时: "4", 人数: 7 },
            { 小时: "5", 人数: 5 },
            { 小时: "6", 人数: 3 },
            { 小时: "1", 人数: 2 },
            { 小时: "2", 人数: 5 },
            { 小时: "3", 人数: 1 },
            { 小时: "4", 人数: 4 },
            { 小时: "5", 人数: 3 },
            { 小时: "6", 人数: 8 },
            { 小时: "1", 人数: 5 },
            { 小时: "2", 人数: 3 },
            { 小时: "3", 人数: 4 },
            { 小时: "4", 人数: 5 },
            { 小时: "5", 人数: 6 },
            { 小时: "6", 人数: 4 }
          ]
        },
        colors: ["#DB75FF"],
        extend: {
          yAxis: {
            splitNumber: 2,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#465587",
                width: 1,
                type: "dashed"
              }
            },
            axisLabel: {
              color: "#fff"
            }
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            }
          },
          series: {
            // label: { show: true, position: "top" },
            barWidth: 15
          }
        },
        grid: {
          x: 0,
          y: 20,
          y2: 0,
          x2: 0,
          backgroundColor: "#fff",
          y2: 0
        }
      },
      monthChartData: {
        chartData: {
          columns: ["天", "人数"],
          rows: [
            { 天: "01", 人数: 5 },
            { 天: "03", 人数: 4 },
            { 天: "05", 人数: 3 },
            { 天: "07", 人数: 5 },
            { 天: "09", 人数: 8 },
            { 天: "11", 人数: 9 },
            { 天: "13", 人数: 5 },
            { 天: "15", 人数: 4 },
            { 天: "17", 人数: 6 },
            { 天: "19", 人数: 7 },
            { 天: "21", 人数: 5 },
            { 天: "23", 人数: 3 },
            { 天: "25", 人数: 2 },
            { 天: "27", 人数: 5 },
            { 天: "29", 人数: 1 },
            { 天: "31", 人数: 4 }
          ]
        },
        colors: ["#4BF9FF"],
        extend: {
          yAxis: {
            splitNumber: 2,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#465587",
                width: 1,
                type: "dashed"
              }
            },
            axisLabel: {
              color: "#fff"
            }
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            }
          },
          series: {
            // label: { show: true, position: "top" },
            barWidth: 15
          }
        },
        grid: {
          x: 0,
          y: 20,
          y2: 0,
          x2: 0,
          backgroundColor: "#fff",
          y2: 0
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style/minix.scss";
#emergencyCall {
  display: flex;
  padding: 0.23rem 0.2rem 0.07rem;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.2rem;
  background-image: url("../assets/hicling/bgi-index.png");
  background-size: cover;
}
.main-left {
  width: 9.12rem;
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
.monthWarn {
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 0.5rem;
    background-color: #1c1b3b;
    border-bottom: 1px solid rgba(51, 213, 255, 0.2);
    &:first-of-type,
    &:last-of-type {
      border-bottom: none;
    }
  }
  th {
    height: 0.34rem;
    color: #33d5ff;
    font-size: 0.22rem;
    background-color: #1f2545;
  }
  td {
    font-size: 0.2rem;
    text-align: center;
  }
}
.item-left,
.item-right {
  width: 4.5rem;
}
.aid-info {
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 0.3rem;
    background-color: #1c1b3b;
  }
  th {
    height: 0.34rem;
    color: #33d5ff;
    font-size: 0.2rem;
    background-color: #1f2545;
  }
  td {
    font-size: 0.2rem;
    text-align: center;
  }
}
.main-right {
  margin-left: 0.55rem;
  width: 8.94rem;
}
.incident {
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 0.44rem;
    border-bottom: 1px solid rgba(51, 213, 255, 0.2);
    &:first-of-type {
      border-bottom: none;
      height: 0.33rem;
    }
  }
  th {
    color: #fff;
    font-size: 0.22rem;
    background-color: #1977f2;
  }
  td {
    font-size: 0.2rem;
    .avater {
      margin-top: 0.02rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
  }
}
.todayEvent {
  margin-top: 0.26rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.08rem;
  > div {
    box-sizing: border-box;
    padding: 0.05rem 0.2rem;
    position: relative;
    width: 2.36rem;
    height: 100%;
    p:last-of-type {
      position: absolute;
      right: 0.09rem;
      bottom: 0.05rem;
      font-size: 0.6rem;
      font-weight: bold;
    }
  }
  .today {
    width: 1.6rem;
    padding: 0;
    font-size: 0.22rem;
    p:last-of-type {
      left: 0;
      bottom: 0;
      span:first-child {
        color: #44ff57;
      }
      span:last-child {
        font-size: 0.3rem;
      }
    }
  }
  .red {
    background: rgba(100, 10, 13, 0.5);
    border: 1px solid rgba(252, 53, 59, 1);
  }
  .blue {
    background: rgba(13, 50, 99, 0.5);
    border: 1px solid rgba(25, 119, 242, 1);
  }
  .green {
    background: rgba(39, 110, 65, 0.5);
    border: 1px solid rgba(68, 255, 87, 1);
  }
}
.event-info {
  li {
    display: flex;
    justify-content: center;
    height: 0.4rem;
    p:first-child {
      width: 1.52rem;
    }
    p:last-child {
      width: 2.2rem;
    }
  }
}
.wrap{
  background-image: url("../assets/img/bgImg5.jpg");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>

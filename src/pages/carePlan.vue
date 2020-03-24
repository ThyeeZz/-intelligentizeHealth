<template>
  <!-- <div id="carePlan">
    <div class="main-left">
      <div class="carePerson">
        <div class="search-box">
          <input type="text" placeholder="请输入用户姓名或编码">
          <span class="search-icon"></span>
        </div>
        <div class="search-result">
          <div class="result-left">
            <img src="../assets/hicling/img-avater.png" alt class="avater">
            <p>护理等级</p>
            <p>A1 自理</p>
          </div>
          <div class="result-center">
            <p>朱谦</p>
            <ul>
              <li>
                <span>年龄</span>
                <span>68</span>
              </li>
              <li>
                <span>身份证</span>
                <span>32******85***</span>
              </li>
              <li>
                <span>ID</span>
                <span>WH056</span>
              </li>
              <li>
                <span>地址</span>
                <span>A5-404</span>
              </li>
            </ul>
          </div>
          <div class="result-right">
            <div class="flex">
              <div class="flex-left">
                <span class="carePerson-icon"></span>
              </div>
              <div class="flex-right">
                <span>护理人员</span>
              </div>
            </div>
            <div class="flex">
              <div class="flex-left">
                <span class="carePhone"></span>
              </div>
              <div class="flex-right">
                <p>
                  <span>周医生</span>
                  <span>136-2523-2888</span>
                </p>
                <p>周一/周三/周五 : 9:00-21:00</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-left">
                <span class="carePhone"></span>
              </div>
              <div class="flex-right">
                <p>
                  <span>郑医生</span>
                  <span>136-2523-2888</span>
                </p>
                <p>周二/周四/周六 : 9:00-21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="careUpdate">
        <div class="title">个人照护记录更新</div>
        <table class="careUpdate-list">
          <tr>
            <td>
              <span>06:00</span>
              <span></span>
              <i class="topDot"></i>
            </td>
            <td>起床</td>
            <td>
              <p>正常起床</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>07:00</span>
              <span></span>
            </td>
            <td>早餐</td>
            <td>
              <p>早餐量正常</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>10:00</span>
              <span></span>
            </td>
            <td>测量血压</td>
            <td>
              <p>低血压偏高，98 mmHg，高血压130mmHg正常，继续吃降压药,低血压偏高</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>11:00</span>
              <span></span>
            </td>
            <td>活动</td>
            <td>
              <p>活动时间30分钟，做了正常运动</p>
            </td>
            <td>
              <span class="no-done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>12:00</span>
              <span></span>
            </td>
            <td>午餐</td>
            <td>
              <p>午餐正常</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>15:00</span>
              <span></span>
            </td>
            <td>茶点</td>
            <td>
              <p>今天生日，一起用生日蛋糕</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>18:00</span>
              <span></span>
            </td>
            <td>晚餐</td>
            <td>
              <p>晚餐正常，餐后散步</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>21:00</span>
              <span></span>
              <i class="bottomDot"></i>
            </td>
            <td>睡觉</td>
            <td>
              <p>睡前阅读30分钟，正常睡觉</p>
            </td>
            <td>
              <span class="done"></span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="main-center">
      <div class="careRecord">
        <div class="title">个人照护记录更新</div>
        <ul class="careRecord-ul">
          <li>
            <span>
              <i>时间</i>
              <i>2018-06-15</i>
            </span>
            <span>
              <i>大便隐血</i>
              <i>待查</i>
            </span>
          </li>
          <li>
            <span>
              <i>心率</i>
              <i>70次每分钟</i>
            </span>
            <span>
              <i>尿酸</i>
              <i>高尿酸血症</i>
            </span>
          </li>
          <li>
            <span>
              <i>外科</i>
              <i>胸膝位肛指正常</i>
            </span>
            <span>
              <i>尿酸</i>
              <i>lgA偏高</i>
            </span>
          </li>
          <li>
            <span>
              <i>耳鼻喉科</i>
              <i>慢性咽炎</i>
            </span>
            <span>
              <i>血压</i>
              <i>102/64</i>
            </span>
          </li>
          <li>
            <span>
              <i>耳鼻喉科</i>
              <i>过敏性鼻炎</i>
            </span>
            <span>
              <i>体重指数</i>
              <i>25.46</i>
            </span>
          </li>
          <li>
            <span>
              <i>眼科</i>
              <i>屈光不正</i>
            </span>
            <span>
              <i>耳鼻喉科</i>
              <i>正常</i>
            </span>
          </li>
          <li>
            <span>
              <i>口腔科</i>
              <i>阻生齿</i>
            </span>
            <span>
              <i>外科</i>
              <i>正常</i>
            </span>
          </li>
          <li>
            <span>
              <i>彩超腹部/双肾</i>
              <i>未见异常</i>
            </span>
            <span>
              <i>前列腺</i>
              <i>未见异常</i>
            </span>
          </li>
        </ul>
      </div>
      <div class="medicalFiles">
        <div class="title">医疗档案</div>
        <ul>
          <li>
            <p>
              <span>2018/03/05</span>
              <span>瑞金医院</span>
            </p>
            <p>高血压入院检查，降压药XXX，服用三周适当增加日常活动量</p>
          </li>
          <li>
            <p>
              <span>2017/11/15</span>
              <span>华山医院</span>
            </p>
            <p>发烧，并伴有腹泻，入院检查</p>
          </li>
          <li>
            <p>
              <span>2016/03/05</span>
              <span>华山医院</span>
            </p>
            <p>通风，入院检查，拍X影像照</p>
          </li>
        </ul>
      </div>
      <div class="healthRecord">
        <div class="title">健康记录</div>
        <div class="healthRecord-info">
          <ul class="clear">
            <li>活动</li>
            <li>睡眠</li>
            <li>热量</li>
            <li>心率</li>
            <li>血压</li>
            <li>血糖</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="date">10月23日</div>
      <div class="carePersonNum">
        <div class="title-box">
          <p>平台照护人数</p>
          <p>
            <span style="color:#4BF9FF">235</span>
            <span>人</span>
          </p>
        </div>
        <ul class="carePersonNum-ul">
          <li>
            <p>健康</p>
            <p>
              <v-progress :height="0.2" color="#5093DA" :percentage="100"></v-progress>
            </p>
            <p>
              <span>298</span>
              <span>人</span>
            </p>
          </li>
          <li>
            <p>自理</p>
            <p>
              <v-progress :height="0.2" color="#179E5F" :percentage="40"></v-progress>
            </p>
            <p>
              <span>22</span>
              <span>人</span>
            </p>
          </li>
          <li>
            <p>一级护理</p>
            <p>
              <v-progress :height="0.2" color="#FE923F" :percentage="30"></v-progress>
            </p>
            <p>
              <span>13</span>
              <span>人</span>
            </p>
          </li>
          <li>
            <p>二级护理</p>
            <p>
              <v-progress :height="0.2" color="#F95D62" :percentage="10"></v-progress>
            </p>
            <p>
              <span>2</span>
              <span>人</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="preCarePerson">
        <div class="title-box">
          <p>过去6个月照护人数</p>
          <p class="unit">人数/月份</p>
        </div>
        <div class="carePerson-chart">
          <ve-line
            :data="careChartData.chartData"
            :extend="careChartData.extend"
            height="100%"
            :grid="careChartData.grid"
            :tooltip-visible="false"
            :legend-visible="false"
          ></ve-line>
        </div>
      </div>
      <div class="SpecialRemark">
        <div class="title-box">
          <p>特别事项</p>
          <p></p>
        </div>
        <div class="remark-item">
          <div class="remark-item-title">
            <p>
              <i class="calendar"></i>生日提醒
            </p>
            <p>
              <span>06月08日</span>
              <span>12:00:36</span>
            </p>
          </div>
          <div class="remark-item-content">
            <p>需要安排生日蛋糕</p>
          </div>
        </div>
        <div class="remark-item">
          <div class="remark-item-title">
            <p>
              <i class="calendar"></i>待办事项
            </p>
            <p>
              <span>05月18日</span>
              <span>12:00:36</span>
            </p>
          </div>
          <div class="remark-item-content">
            <p>瑞金医院，复查预约</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="wrap">

  </div>
</template>
<script>
import VProgress from "@/component/VProgress";
export default {
  name: "CarePlan",
  components: {
    VProgress
  },
  data() {
    return {
      careChartData: {
        chartData: {
          columns: ["月", "人数"],
          rows: [
            { 月: "6", 人数: 30 },
            { 月: "7", 人数: 40 },
            { 月: "8", 人数: 60 },
            { 月: "9", 人数: 75 },
            { 月: "10", 人数: 50 },
            { 月: "11", 人数: 66 },
            { 月: "12", 人数: 40 }
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
            label: {
              normal: {
                show: true
              }
            }
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
#carePlan {
  display: flex;
  color: #fff;
  padding: 0.23rem 0.2rem 0.22rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.2rem;
  // background-color:  rgba(7, 7, 49, .1);
  background-image: url("../assets/hicling/bgi-index.png");
  background-size: cover;
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
      text-align: right;
    }
  }
}
.main-left {
  width: 7.56rem;
}
.carePerson {
  box-sizing: border-box;
  padding: 0.18rem 0.26rem 0;
  height: 3.54rem;
  background: rgba(21, 24, 54, 1);
  border-radius: 0.08rem;
}
.search-box {
  position: relative;
  width: 7.05rem;
  height: 0.4rem;
  border: 1px solid rgba(25, 119, 242, 1);
  border-radius: 0.3rem;
  margin-bottom: 0.32rem;
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
.search-result {
  display: flex;
  justify-content: space-between;
  .result-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .avater {
      width: 1.27rem;
      height: 1.27rem;
      border-radius: 50%;
    }
    p:first-of-type {
      height: 0.4rem;
      line-height: 0.4rem;
      color: #33d5ff;
      text-align: center;
    }
    p:last-of-type {
      height: 0.4rem;
      line-height: 0.4rem;
      color: #30f24a;
      text-align: center;
      font-size: 0.3rem;
    }
  }
}
.result-center {
  width: 2.27rem;
  margin-left: 0.36rem;
  > p {
    font-size: 0.46rem;
  }
  > ul {
    margin-top: 0.27rem;
    padding-top: 0.1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    li {
      display: flex;
      justify-content: space-between;
      height: 0.3rem;
      span:first-child {
        color: #33d5ff;
      }
    }
  }
}
.result-right {
  width: 2.85rem;
  margin-left: 0.36rem;
  .flex-left {
    width: 0.6rem;
  }
  .flex-right {
    padding-top: 0.1rem;
    width: 2.16rem;
    p:last-child {
      font-size: 0.16rem;
      height: 0.28rem;
      line-height: 0.28rem;
      color: #5093da;
    }
    > span {
      font-size: 0.22rem;
    }
  }
}
.carePerson-icon {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  background-image: url("../assets/hicling/carePerson.png");
  background-size: contain;
}
.carePhone {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  background-image: url("../assets/hicling/carePhone.png");
  background-size: contain;
}
.done {
  display: inline-block;
  height: 0.42rem;
  width: 0.42rem;
  background-image: url("../assets/hicling/done.png");
  background-size: contain;
}
.no-done {
  display: inline-block;
  height: 0.42rem;
  width: 0.42rem;
  background-image: url("../assets/hicling/no-done.png");
  background-size: contain;
}
.careUpdate {
  margin-top: 0.36rem;
}
.careUpdate-list {
  margin-top: 0.2rem;
  border-spacing: none;
  td {
    &:first-of-type {
      position: relative;
      width: 0.9rem;
      border-right: 1px dashed #fff;
      span:first-of-type {
        color: #2bee5f;
        font-size: 0.2rem;
      }
      span:last-of-type {
        position: absolute;
        top: 0.15rem;
        right: -0.09rem;
        width: 0.18rem;
        height: 0.18rem;
        background-color: #fff;
        border-radius: 50%;
      }
      i.topDot {
        position: absolute;
        top: -0.08rem;
        right: -0.06rem;
        width: 0.12rem;
        height: 0.12rem;
        background-color: #fff;
        border-radius: 50%;
      }
      i.bottomDot {
        position: absolute;
        top: 0.48rem;
        right: -0.06rem;
        width: 0.12rem;
        height: 0.12rem;
        background-color: #fff;
        border-radius: 50%;
      }
    }
    &:nth-of-type(2) {
      padding-left: 0.1rem;
      width: 1.23rem;
      text-align: center;
    }
    &:nth-of-type(3) {
      width: 4.5rem;
      p {
        position: relative;
        padding-left: 0.2rem;
        height: 0.5rem;
        line-height: 0.24rem;
        background: rgba(175, 198, 223, 0.15);
        border-radius: 0.04rem;
        overflow: hidden;
      }
    }
    &:nth-of-type(4) {
      padding-left: 0.14rem;
    }
  }
}
.main-center {
  width: 5rem;
  margin-left: 0.13rem;
}
.careRecord-ul {
  box-sizing: border-box;
  padding: 0.12rem 0;
  margin-top: 0.1rem;
  height: 2.68rem;
  background: rgba(19, 24, 55, 1);
  li {
    padding: 0 0.06rem;
    display: flex;
    justify-content: space-between;
    span {
      width: 48%;
      display: flex;
      justify-content: space-between;
      i:first-child {
        color: #33d5ff;
      }
    }
  }
  li:nth-child(2n + 1) {
    height: 0.3rem;
    background: rgba(31, 37, 69, 1);
  }
}
.medicalFiles {
  margin-top: 0.1rem;
  ul {
    margin-top: 0.1rem;
    padding-left: 0.25rem;
    height: 2.6rem;
    background: rgba(175, 198, 223, 0.15);
    border-radius: 0.04rem;
    li {
      p:first-child {
        padding-top: 0.12rem;
        color: #33d5ff;
      }
    }
  }
}
.healthRecord {
  margin-top: 0.12rem;
}
.healthRecord-info {
  margin-top: 0.1rem;
  height: 2.3rem;
  background: rgba(175, 198, 223, 0.15);
  border-radius: 0.04rem;
  ul {
    border-bottom: 1px solid rgb(44, 57, 75);
    li {
      float: left;
      height: 0.36rem;
      line-height: 0.36rem;
      width: 14.2%;
      text-align: center;
      margin-top: 0.1rem;
      cursor: pointer;
      color: #33d5ff;
    }
  }
}
.main-right {
  width: 5.84rem;
  margin-left: 0.25rem;
  .date {
    height: 0.94rem;
    line-height: 0.94rem;
    text-align: center;
    font-size: 0.58rem;
    font-weight: bold;
    background: rgba(25, 119, 242, 1);
  }
}
.carePersonNum {
  margin-top: 0.45rem;
}
.carePersonNum-ul {
  margin-top: 0.15rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.4rem;
    padding: 0 0.06rem;
    p {
      &:nth-of-type(1) {
        width: 1rem;
      }
      &:nth-of-type(2) {
        width: 3rem;
      }
      &:nth-of-type(3) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 1rem;
        span:first-child {
          font-weight: bold;
          font-size: 0.3rem;
        }
      }
    }
  }
}
.preCarePerson {
  margin-top: 0.3rem;
  .unit {
    height: 0.34rem;
    line-height: 0.34rem;
    font-size: 0.16rem;
    color: #33d5ff;
  }
  .carePerson-chart {
    height: 2rem;
    // background-image: url("../assets/hicling/preCarePerson.png");
    // background-size: contain;
  }
}
.SpecialRemark {
  margin-top: 0.26rem;
}
.remark-item {
  margin-top: 0.14rem;
  height: 0.96rem;
  background: rgba(31, 37, 69, 0.6);
  .remark-item-title {
    padding: 0 0.1rem;
    display: flex;
    justify-content: space-between;
    background: rgba(31, 37, 69, 1);
    color: #33d5ff;
    height: 0.3rem;
    p:first-child {
      display: flex;
      justify-content: center;
    }
  }
  .remark-item-content p {
    height: 0.66rem;
    line-height: 0.66rem;
    padding-left: 0.18rem;
  }
}
.calendar {
  display: inline-block;
  width: 0.26rem;
  height: 0.26rem;
  background-image: url("../assets/hicling/calendar.png");
  background-size: contain;
}
.wrap{
  background-image: url("../assets/img/bgImg6.jpg");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>

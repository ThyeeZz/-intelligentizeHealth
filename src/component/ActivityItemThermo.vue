<template>
  <div :class="member.bp>limit?'activity bg-red':'activity bg-black'" @click="$emit('choose')">
    <div class="showbord-head">
      <div class="avatar">
        <img :src="member.avatar" alt />
      </div>
      <div class="user-info">
        <div class="user-info-top">
          <div class="name">
            <span>{{member.name}}</span>
          </div>
          <div class="position">
            <span class="pos-icon"></span>
            <p>{{member.position==1?"翰临科技":"未知"}}</p>
          </div>
        </div>
        <div class="user-info-bot">
          <span class="device-icon bgcb" v-if="member.deviceId=='Band'||member.deviceId=='VOC'"></span>
          <span class="device-icon bgca" v-if="member.deviceId=='Aura'||member.deviceId=='Leap'"></span>
          <span class="device-icon bgctmo" v-if="member.deviceId=='Thermo'"></span>
          <p class="device-name">{{member.deviceId}}</p>
        </div>
      </div>
    </div>

    <div class="sport-data">
      <!-- 温度 心率 卡路里 步数 匹配 BAND VOC 设备展示-->
      <div class="sport-data-top-band" v-if="member.deviceId=='VOC'||member.deviceId=='Band'">
        <div class="hr">
          <div class="hr-left">
            <p class="hr-left-icon"></p>
            <p class="hr-left-data">{{member.hr}}</p>
          </div>
          <div class="hr-right">
            <p class="hr-right-tag">心率负荷</p>
            <p
              class="hr-right-data"
              v-if="member.hr"
            >{{member.gender==0?Math.round(member.hr/(226-member.age)*100):Math.round(member.hr/(220-member.age)*100)}}%</p>
            <p v-else>0%</p>
          </div>
        </div>
        <div class="band">
          <div :class="member.bp>limit?'band-left-warn':'band-left'">
            <p class="band-left-icon"></p>
            <p class="band-left-data">{{(member.bp).toFixed(1)}}</p>
            <div class="band-left-unit-wrap">
              <p class="band-left-unit"></p>
            </div>
          </div>
        </div>
      </div>
      <!-- 温度 卡路里 步数 匹配THERMO设备展示 -->
      <div class="sport-data-top-thermo" v-if="member.deviceId=='Thermo'">
        <div :class="member.bp>limit?'thermo-left-warn':'thermo-left'">
          <p class="thermo-left-icon"></p>
          <p class="thermo-left-data">{{member.bp.toFixed(1)}}</p>
          <div class="thermo-left-unit-wrap">
            <p class="thermo-left-unit"></p>
          </div>
        </div>
        <div class="thermo-right" :style="member.bp>limit?'color:#f14246':'color:#fff'">
          <span class="tem-right-desc">上次测量</span>
        </div>
      </div>
      <!-- 心率 血压 卡路里 步数 匹配AURA LEAP或者以上接不匹配展示 -->
      <div
        class="sport-data-top-aura"
        v-if="member.deviceId=='Aura'||member.deviceId=='Leap'||member.deviceId=='Unknown Device'"
      >
        <div class="hr">
          <div class="hr-left">
            <p class="hr-left-icon"></p>
            <p class="hr-left-data">{{member.hr}}</p>
          </div>
          <div class="hr-right">
            <p class="hr-right-tag">心率负荷</p>
            <p
              class="hr-right-data"
              v-if="member.hr"
            >{{member.gender==0?Math.round(member.hr/(226-member.age)*100):Math.round(member.hr/(220-member.age)*100)}}%</p>
            <p v-else>0%</p>
          </div>
        </div>
        <div class="bp">
          <div class="bp-left">
            <p class="bp-left-icon"></p>
          </div>
          <div class="bp-right">
            <span class="bp-right-tag">上次测量</span>
            <span class="bp-right-data">{{member.hbp}}/{{member.lbp}}</span>
          </div>
        </div>
      </div>
      <div class="sport-data-bot">
        <div class="st-cal">
          <div class="st-cal-left">
            <p class="st-cal-left-icon"></p>
            <p class="st-cal-left-data">{{member.totalCal}}</p>
          </div>
          <div class="st-cal-right">
            <p class="st-cal-right-uni">千卡</p>
          </div>
        </div>
        <div class="st-cal">
          <div class="st-cal-left">
            <p class="st-cal-left-icon step-icon"></p>
            <p class="st-cal-left-data">{{member.steps}}</p>
          </div>
          <div class="st-cal-right">
            <p class="st-cal-right-uni">步</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityItem",
  props: {
    member: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 37.4
    }
  }
  
  
};
</script>
<style lang="scss" scoped>
.activity {
  width: 3.36rem;
  height: 2.06rem;
  border-radius: 0.08rem;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .showbord-head {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.1rem 0.1rem;
    margin-bottom: 0.05rem;
    .avatar {
      width: 20%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .user-info {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .user-info-top {
        height: 45%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .name {
          width: 50%;
          height: 100%;
        }
        .position {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          .pos-icon {
            width: 40%;
            height: 100%;
            background: url("../assets/img/location1.png") center center
              no-repeat;
            background-size: contain;
          }
        }
      }
      .user-info-bot {
        height: 45%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        .device-icon {
          width: 10%;
          height: 100%;
        }
        .bgcb {
          background: url("../assets/img/ClingBand.png") center center no-repeat;
          background-size: contain;
          margin-right: 10px;
        }
        .bgca {
          background: url("../assets/img/ClingAura.png") center center no-repeat;
          background-size: contain;
          margin-right: 10px;
        }
        .bgctmo {
          background: url("../assets/img/ClingThermo.png") center center
            no-repeat;
          background-size: contain;
          margin-right: 10px;
        }
        .device-name {
        }
      }
    }
  }
  .sport-data {
    width: 100%;
    height: 55%;
    display: flex;
    box-sizing: border-box;
    padding: 0.05rem 0.1rem;
    flex-direction: column;
    justify-content: space-between;
    .sport-data-top-aura {
      height: 47%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .hr {
        width: 48.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #000;
        color: #fff;
        .hr-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;

          font-size: 0.26rem;
          .hr-left-icon {
            width: 40%;
            height: 80%;
            background: url("../assets/img/hr.png") center center no-repeat;
            background-size: contain;
          }
          .hr-left-data {
            font-size: 0.26rem;
          }
        }
        .hr-right {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 0.16rem;
          box-sizing: border-box;
          padding-right: 0.03rem;
          .hr-right-tag {
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hr-right-data {
            text-align: center;
            font-size: 0.16rem;
          }
        }
      }
      .bp {
        width: 48.5%;
        height: 100%;
        background-color: #000;
        display: flex;
        .bp-left {
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          .bp-left-icon {
            width: 90%;
            height: 90%;
            background: url("../assets/img/bp.png") no-repeat;
            background-size: contain;
            background-position: 50% 50%;
          }
        }
        .bp-right {
          display: flex;
          flex-direction: column;
          width: 60%;
          box-sizing: border-box;
          padding-right: 0.03rem;
          .bp-right-tag {
            text-align: right;
            font-size: 0.14rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bp-right-data {
            text-align: center;
            font-size: 0.22rem;
          }
        }
      }
    }
    .sport-data-top-thermo {
      height: 47%;
      width: 100%;
      display: flex;
      background-color: #000;
      justify-content: space-between;
      .thermo-left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        .thermo-left-icon {
          width: 20%;
          height: 80%;
          background: url("../assets/img/temp-normal.png") center center
            no-repeat;
          background-size: contain;
          justify-content: space-around;
        }
        .thermo-left-data {
          width: 45%;
          font-size: 0.28rem;
          margin-right: 10px;
          text-align: left;
        }
        .thermo-left-unit-wrap {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: flex-start;

          .thermo-left-unit {
            margin-top: 0.05rem;
            width: 100%;
            height: 60%;
            background: url("../assets/img/temp-unit.png") center center
              no-repeat;
            background-size: contain;
          }
        }
      }
      .thermo-left-warn {
        color: #f14246;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        .thermo-left-icon {
          width: 20%;
          height: 80%;
          background: url("../assets/img/temp-alarm.png") center center
            no-repeat;
          background-size: contain;
          justify-content: space-around;
        }
        .thermo-left-data {
          width: 45%;
          font-size: 0.28rem;
          margin-right: 10px;
          text-align: left;
        }
        .thermo-left-unit-wrap {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: flex-start;

          .thermo-left-unit {
            margin-top: 0.05rem;
            width: 100%;
            height: 60%;
            background: url("../assets/img/temp-unit-red.png") center center
              no-repeat;
            background-size: contain;
          }
        }
      }
      .thermo-right {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .tem-right-desc {
          margin-top: 0.03rem;
        }
      }
    }
    .sport-data-top-band {
      height: 47%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .hr {
        width: 48.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #000;
        .hr-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 0.26rem;
          .hr-left-icon {
            width: 40%;
            height: 80%;
            background: url("../assets/img/hr.png") center center no-repeat;
            background-size: contain;
          }
          .hr-left-data {
            font-size: 0.26rem;
          }
        }
        .hr-right {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 0.16rem;
          box-sizing: border-box;
          padding-right: 0.03rem;
          .hr-right-tag {
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hr-right-data {
            text-align: center;
            font-size: 0.16rem;
          }
        }
      }
      .band {
        width: 48.5%;
        height: 100%;
        background: rgba(0, 0, 0, 1);
        .band-left {
          box-sizing: border-box;
          padding-left: 0.05rem;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          .band-left-icon {
            width: 20%;
            height: 80%;
            background: url("../assets/img/temp-normal.png") center center
              no-repeat;
            background-size: contain;
            justify-content: space-around;
          }
          .band-left-data {
            width: 45%;
            font-size: 0.28rem;
            margin-right: 10px;
            text-align: left;
          }
          .band-left-unit-wrap {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;

            .band-left-unit {
              margin-top: 0.05rem;
              width: 100%;
              height: 60%;
              background: url("../assets/img/temp-unit.png") center center
                no-repeat;
              background-size: contain;
            }
          }
        }
        .band-left-warn {
          color: #f14246;
          box-sizing: border-box;
          padding-left: 0.05rem;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          .band-left-icon {
            width: 20%;
            height: 80%;
            background: url("../assets/img/temp-alarm.png") center center
              no-repeat;
            background-size: contain;
            justify-content: space-around;
          }
          .band-left-data {
            width: 45%;
            font-size: 0.28rem;
            margin-right: 10px;
            text-align: left;
          }
          .band-left-unit-wrap {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;

            .band-left-unit {
              margin-top: 0.05rem;
              width: 100%;
              height: 60%;
              background: url("../assets/img/temp-unit-red.png") center center
                no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
    .sport-data-bot {
      height: 47%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .st-cal {
        background-color: #000;
        width: 48.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .st-cal-left {
          width: 70%;
          height: 100%;
          display: flex;
          align-items: center;
          .st-cal-left-icon {
            width: 29%;
            height: 79%;
            background: url("../assets/img/cal.png") center center no-repeat;
            background-size: contain;
          }
          .st-cal-left-data {
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 0.26rem;
          }
          .step-icon {
            background: url("../assets/img/step.png") center center no-repeat;
            background-size: contain;
          }
        }
        .st-cal-right {
          width: 30%;
          height: 100%;
          display: flex;
          box-sizing: border-box;
          padding-right: 0.03rem;
          flex-direction: column-reverse;
          .st-cal-right-uni {
            font-size: 0.14rem;
            text-align: right;
            margin-bottom: 0.03rem;
          }
        }
      }
    }
  }
}
.content {
  box-sizing: border-box;
  position: relative;
  padding: 0.08rem 0.1rem;
  height: 1.78rem;
  border-radius: 0.08rem;
}
.hr-num {
  position: absolute;
  left: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.5rem;
  font-weight: bold;
}

.bp-num {
  position: absolute;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.4rem;
  font-weight: bold;
  p {
    text-align: right;
    line-height: 0.4rem;
  }
  .slash {
    margin-right: 2px;
    font-size: 0.4rem;
    font-weight: 300;
  }
}
.cal-box {
  position: absolute;
  left: 0.1rem;
  bottom: 0.08rem;
  p {
    display: flex;
    align-items: center;
  }
}
.step-box {
  position: absolute;
  right: 0.1rem;
  bottom: 0.08rem;
  p {
    display: flex;
    align-items: center;
  }
}
.bg-red {
  background: #f14246;
}
.bg-blue {
  background: rgba(70, 85, 135, 1);
}
.bg-black {
  background: rgba(69, 85, 136, 1);
}
</style>

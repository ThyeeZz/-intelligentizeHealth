<template>
  <div class="sleep" @click="$emit('choose')">
    <div class="userInfo">
      <div class="avatar">
        <img :src="member.avatar" alt />
      </div>
      <div class="information">
        <div class="nameId">
          <p class="name">
            <span>姓名:</span>
            {{member.name}}
          </p>
        </div>
        <div class="posInfo">
          <div class="pos">
            <p class="id">ID:{{member.deviceId}}</p>
            <span class="posIcon"></span>
            <p :class="member.position ==0?'colorWhite':'colorGreen'">{{member.position==1?"翰临科技":"未知"}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sleepInfo">
      <div class="sleepTime">
        <div class="slepDuration">
          <span class="moonIcon"></span>
          <div class="time">
            <p class="span">
              <span
                class="time_num"
              >{{parseInt(member.sleepTotal/60)?parseInt(member.sleepTotal/60):0}}</span>
              <span calss="time_num2">时</span>
              <span
                class="time_num"
              >{{parseInt(member.sleepTotal%60)?parseInt(member.sleepTotal%60):0}}</span>
              <span calss="time_num2">分</span>
            </p>
          </div>
        </div>
        <div class="start_end">
          <p
            v-if="member.startSleep != 0"
            class="start"
          >入睡:&nbsp;{{new Date(member.startSleep).getHours()?new Date(member.startSleep).getHours():0}}时{{new Date(member.startSleep).getMinutes()?new Date(member.startSleep).getMinutes():0}}分</p>
          <p class="strat" v-else>入睡:00&nbsp;时&nbsp;00&nbsp;分</p>
          <p
            v-if="member.endSleep != 0"
            class="end"
          >苏醒:&nbsp;{{new Date(member.endSleep).getHours()?new Date(member.endSleep).getHours():0}}时{{new Date(member.endSleep).getMinutes()?new Date(member.endSleep).getMinutes():0}}分</p>
          <p class="end" v-else>苏醒:00&nbsp;时&nbsp;00&nbsp;分</p>
        </div>
      </div>
      <div class="sleepQuality">
        <span class="icon"></span>
        <p class="sleep_quality">
          浅睡:
          <span>{{member.lightSleep?member.lightSleep:0}}分</span>
        </p>
        <p class="sleep_quality">
          中睡:
          <span>{{member.midSleep?member.midSleep:0}}分</span>
        </p>
        <p class="sleep_quality">
          深睡:
          <span>{{member.deepSleep?member.deepSleep:0}}分</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SleepItem",
  props: ["member"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.sleep {
  margin-left: 0.1rem;
  width: 3.36rem;
  height: 2.06rem;
  border-radius: 0.08rem;
  background: rgba(64, 14, 139, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .userInfo {
    width: 95%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    margin: 0.15rem 2.5%;
    .avatar {
      width: 20%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .information {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      font-size: 0.18rem;
      .nameId {
        width: 100%;
        height: 50%;
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .posInfo {
        width: 100%;
        height: 50%;
        .pos {
          display: flex;
          height: 100%;
          justify-content: space-between;
          .posIcon {
            width: 20%;
            background-image: url("../assets/img/location1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          p {
            width: 70%;
            font-size: 0.18rem;
            margin-right: 5px;
            line-height: 0.35rem;
          }
        }
        .electric {
          display: flex;
          height: 50%;
          .eleIcon {
            width: 20%;
            background-image: url("../assets/img/battery1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          p {
            width: 70%;
            font-size: 0.24rem;
            margin-left: 5px;
          }
        }
      }
    }
  }
  .sleepInfo {
    width: 100%;
    height: 55%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 0.16rem;
    font-weight: normal;
    .sleepTime {
      height: 45%;
      width: 96%;
      background-color: rgb(33, 0, 69);
      display: flex;
      .slepDuration {
        width: 58%;
        display: flex;
        .moonIcon {
          width: 30%;
          background-image: url("../assets/img/moon1.png");
          background-size: 60% 60%;
          background-repeat: no-repeat;
          background-position: center;
        }
        .time {
          width: 100%;
          height: 100%;
          position: relative;
          .span {
            height: 100%;
            width: 100%;
            .time_num2 {
              display: inline-block;
              width: 15%;
              text-align: center;
              display: inline-block;
              height: 100%;
              line-height: 0.5rem;
            }
            .time_num {
              font-size: 0.36rem;
              display: inline-block;
              width: 30%;
              text-align: center;
              display: inline-block;
              height: 100%;
              line-height: 0.5rem;
            }
          }
        }
      }
      .start_end {
        width: 40%;
        p {
          height: 50%;
          width: 100%;
          line-height: 0.25rem;
        }
      }
    }
    .sleepQuality {
      height: 45%;
      width: 96%;
      background-color: rgb(33, 0, 69);
      display: flex;
      justify-content: space-around;
      position: relative;
      .icon {
        width: 15%;
        height: 60%;

        transform: translateY(30%);
        background-image: url("../assets/img/zhexiantu1.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      .sleep_quality {
        color: aqua;
        width: 27%;
        height: 100%;
        line-height: 0.5rem;
        .font18 {
          font-size: 0.18rem;
        }
      }
    }
  }
}

.bg-red {
  background: rgba(249, 93, 98, 1);
}
.bg-blue {
  background: rgba(70, 85, 135, 1);
}
</style>

<template>
  <div class="wraper">
    <!-- <div class="beacon-item" v-for='(value,key) in countedDevice' :key='key'>
      <p class="person">
        <span>总手环数：</span>
        <span class="person-num">{{value}}</span>
      </p>
      <img class="beacon-img" src="../assets/beacon.png" alt>
      <p class="location">
        <span>网关：</span>
        <span>{{key}}</span>
      </p>
    </div>-->
    <div
      class="beacon-box"
      v-for="(value,key,index) in deviceInBeacon"
      :class="`position${index + 1}`"
      @click="handleClick(key)"
      :key="key"
    >
      <img class="beacon-img1" src="../assets/hicling/new-location.png" alt>
      <span>{{value.length}}人</span>
    </div>
    <!-- <div class="beacon-box" style="top:135px;left:682px">
      <img class="beacon-img1" src="../assets/hicling/new-location.png" alt>
      <span>0人</span>
    </div>-->
    <!-- <div class="beacon-box" style="top:125px;left:386px">
      <img class="beacon-img1" src="../assets/hicling/new-location.png" alt>
      <span>0人</span>
    </div> -->
    <!-- <div class="beacon-box" style="top:351px;left:195px">
      <img class="beacon-img1" src="../assets/hicling/new-location.png" alt>
      <span>0人</span>
    </div> -->
   
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions,mapGetters } from "vuex";
export default {
  name: "Beacon",
  data() {
    return {};
  },
  computed: {
     ...mapGetters(['deviceInBeacon'])
  },
  methods: {
     ...mapActions(["getAlldevice"]),
    handleClick(key) {
      this.$router.push({ name: "bandSport"});
      this.$store.commit('currentBeacon',key);
    }
  },
  created() {},
  mounted() {
    this.getAlldevice({ GymCode: "5209159", Lang: "zh-cn" });
      setInterval(() => {
       this.getAlldevice({ GymCode: "5209159", Lang: "zh-cn" });
    }, 20000);
    
  }
};
</script>
<style scoped>
.position1 {
  top: 23%;
  left: 15%;
}
.position2 {
  top: 56%;
  left: 44%;
}
.position3 {
  top: 22%;
  left: 65%;
}
.position4 {
  top: 55%;
  left: 70%;
}

.wraper {
  position: relative;
  background: url("../assets/hicling/timg.jpg") center no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
/* @media screen and (max-width: )  */
.beacon-item {
  flex-shrink: 0;
  display: inline-block;
  margin-top: 30px;
  margin-right: 20px;
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: rgba(29, 50, 98, 1);
  color: #fff;
}
.beacon-img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
}
.beacon-box {
  position: absolute;
  cursor: pointer;
}
.beacon-box span {
  color: #f75959;
}
.beacon-img1 {
  width: 20px;
}
.person {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
}
.location {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
}
.person-num {
  color: deeppink;
  font-size: 20px;
  font-weight: 600;
}
</style>

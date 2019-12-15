<template>
  <el-col :xs="24" :sm="24" :lg="6" class="home-left">
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="user-info">
            <span>你好！欢迎登陆MYS后台管理系统</span>
            <div class="user-photo">
              <img :src="img" alt />
              <span class="name">{{ $store.state.user.info.name }}</span>
            </div>
            <div class="rank">
              <p>{{ $store.state.user.info.rank }}</p>
              <div>
                <span>登陆时间：</span>
                <span>{{ getDate }}</span>
              </div>
              <div>
                <span>登陆地点：</span>
                <span>{{ LocationProvince }}</span>
                <span>{{ LocationCity }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="new">
            <span>今日新上架(数据皆为mock)</span>
            <el-table :data="tableList" border height="381">
              <el-table-column v-for="(val, index) in tableLable" :key="index" :prop="index" :label="val"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
import BMap from 'BMap';
export default {
  props: ['img', 'tableList', 'tableLable'],
  data() {
    return {
      LocationProvince: '获取定位中 ',
      LocationCity: '---'
    };
  },
  computed: {
    getDate() {
      let d = new Date();
      var str = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
      return str;
    }
  },
  methods: {
    getMap() {
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationProvince = province;
          _this.LocationCity = city;
        },
        function() {
          _this.LocationCity = '定位失败';
        },
        { provider: 'baidu' }
      );
    }
  },
  mounted() {
    this.getMap();
  }
};
</script>

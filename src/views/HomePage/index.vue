<template>
  <el-row class="homePage">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userIcon" class="homeImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="login-info">
          <p>上次登录的时间：<span>2022-04-26</span></p>
          <p>上次登录的地点: <span>大连</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px height:460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, index) in tableLabel"
            :key="index"
            :prop="index"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top: 20px; display: flex; flex-wrap: wrap">
      <el-card
        v-for="val in countData"
        :key="val.name"
        :body-style="{ display: 'flex', padding: 0 }"
        style="margin-right: 20px; width: 30%; margin-bottom: 20px"
      >
        <div style="width: 40px; height: 80px; background-color: pink">
          <i
            class="icon"
            :class="`el-icon-${val.icon}`"
            :style="{ background: val.color }"
            style="
              width: 40px;
              height: 40px;
              font-size: 200%;
              line-height: 80px;
              text-align: center;
            "
          ></i>
        </div>

        <div style="margin-left: 20px">
          <p>￥{{ val.value }}</p>
          <p style="font-size: 4px">{{ val.name }}</p>
        </div>
      </el-card>

      <!--折线图-->
      <el-card style="height: 280px; width: 100%">
        <!-- <div style="height: 280px; width: 100%" ref="echarts"></div> -->
        <Echarts :chartData="echartData.order" style="height: 280px" />
      </el-card>

      <!-- 柱状图 -->
      <el-card style="height: 240px; width: 55%">
        <!-- <div style="height: 220px" ref="userEcharts"></div> -->
        <Echarts :chartData="echartData.user" style="height: 240px" />
      </el-card>

      <!-- 饼图 -->
      <el-card style="height: 240px; width: 44%; margin-left: 0.3%">
        <!-- <div style="height: 150px" ref="videoEcharts"></div> -->
        <Echarts
          :chartData="echartData.video"
          :isAxisChart="false"
          style="height: 150px"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import getData from '../../api/data'
// import * as echarts from 'echarts'
import Echarts from '../../components/Echarts'

export default {
  name: 'HomePage',
  components: {
    Echarts
  },
  data() {
    return {
      userIcon: require('../../assets/image/kabi.jpg'),
      tableData: [],
      // tableData: [
      //   {
      //     name: 'oppo',
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800
      //   },
      //   {
      //     name: 'vivo',
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800
      //   },
      //   {
      //     name: '苹果',
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800
      //   },
      //   {
      //     name: '小米',
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800
      //   },
      //   {
      //     name: '三星',
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800
      //   },
      //   {
      //     name: '魅族',
      //     todayBuy: 100,
      //     monthBuy: 300,
      //     totalBuy: 800
      //   }
      // ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
        const order = data.orderData
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: 'line'
          })
        })
        this.echartData.order.xData = order.date
        this.echartData.order.series = series
        // 把ECharts封装成了Vue组件之后，下面这些就不用写了
        // const option = {
        //   xAxis: {
        //     data: order.date
        //   },
        //   yAxis: {},
        //   legend: {
        //     data: keyArray
        //   },
        //   series
        // }
        // // 绘制折线图
        // const E = echarts.init(this.$refs.echarts)
        // E.setOption(option)
        this.echartData.user.xData = data.userData.map((item) => item.data)
        this.echartData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map((item) => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.userData.map((item) => item.active),
            type: 'bar'
            // bar 表示柱状图
          }
        ]
        // // 柱状图
        // const userOption = {
        //   legend: {
        //     // 图例文字颜色
        //     textStyle: {
        //       color: "#333",
        //     },
        //   },
        //   grid: {
        //     left: "20%",
        //   },
        //   // 提示框
        //   tooltip: {
        //     trigger: "axis",
        //   },
        //   xAxis: {
        //     type: "category", // 类目轴
        //     data: data.userData.map(item => item.date),
        //     axisLine: {
        //       lineStyle: {
        //         color: "#17b3a3",
        //       },
        //     },
        //     axisLabel: {
        //       interval: 0,
        //       color: "#333",
        //     },
        //   },
        //   yAxis: [
        //     {
        //       type: "value",
        //       axisLine: {
        //         lineStyle: {
        //           color: "#17b3a3",
        //         },
        //       },
        //     },
        //   ],
        //   color: ["#2ec7c9", "#b6a2de"],
        //   series: [
        //     {
        //       name: '新增用户',
        //       data: data.userData.map(item => item.new),
        //       type: 'bar'
        //     },
        //     {
        //       name: '活跃用户',
        //       data: data.userData.map(item => item.active),
        //       type: 'bar'
        //       // bar 表示柱状图
        //     }
        //   ],
        // }
        // const U = echarts.init(this.$refs.userEcharts)
        // U.setOption(userOption)
        this.echartData.video.series = [
          {
            data: data.videoData,
            type: 'pie'
          }
        ]
        // // 饼图
        // const videoOption = {
        //   tooltip: {
        //     trigger: "item",
        //   },
        //   color: [
        //     "#0f78f4",
        //     "#dd536b",
        //     "#9462e5",
        //     "#a6a6a6",
        //     "#e1bb22",
        //     "#39c362",
        //     "#3ed1cf",
        //   ],
        //   series: [
        //     {
        //       data: data.videoData,
        //       type: 'pie'
        //     }
        //   ],
        // }
        // const V = echarts.init(this.$refs.videoEcharts)
        // V.setOption(videoOption)
      } else {
      }
      // console.log(res)
    })
  }
}
</script>

<style scoped>
.homeImg {
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.userInfo {
  padding-right: 40px;
  overflow: auto;
}
.num {
  width: 30%;
  height: 10px;
  display: inline-block;
  flex: right;
  flex-wrap: wrap;
}
</style>

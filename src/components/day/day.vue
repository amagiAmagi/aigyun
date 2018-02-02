<template>
    <div>
    <div class="datess">

        <!-- 年份 月份 -->
        <div class="month">
            <i class="el-icon-arrow-left" @click="pickPre(currentYear,currentMonth)"></i>
            <span>{{ currentYear }} 年 {{ currentMonth }} 月</span>
            <i class="el-icon-arrow-right" @click="pickNext(currentYear,currentMonth)"></i>
        </div>
        <!-- 星期 -->
        <ul class="weekdays">
            <li class="weekdays-li">一</li>
            <li class="weekdays-li">二</li>
            <li class="weekdays-li">三</li>
            <li class="weekdays-li">四</li>
            <li class="weekdays-li">五</li>
            <li class="weekdays-li" style="color:#0A0A0A">六</li>
            <li class="weekdays-li" style="color:#0A0A0A">日</li>
        </ul>
        <!-- 日期 -->
        <div class="bodyDiv">
        <ul class="days" v-for="(value,index1) in daysUL" :key="index1">
        <li @click="pick(day,index+index1*7)" v-for="(day, index) in value" class="days-li" :key="index">
            <!--本月-->
            <span v-if="day.getMonth()+1 != currentMonth" class="other-month" :class="{'selected':isSelected[index+index1*7]}">{{ day.getDate() }}</span>
            <span v-else :class="{'selected':isSelected[index+index1*7]}">
          <!--今天-->
          <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
          <span v-else>{{ day.getDate() }}</span>
          </span>
        </li>

    </ul>
        </div>
        <!-- <hr style="height:2px;border:none;border-top:2px dotted #185598;" /> -->
    </div>
    </div>
</template>
<style >
.datess {
  width: 292px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
}
.month {
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  font-size: 20px;
  color: #354656;
}
.month span {
  margin: 0 50px;
}
.days-li {
  float: left;
  flex: 1;
  font-size: 18px;
  width: 50px;
  list-style-type: none;
  text-align: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  height: 40px;
  line-height: 40px;
}
.days {
  margin: 0;
  padding: 0;
  display: flex;
}
.weekdays {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(227, 231, 231, 0.8);
  opacity: 0.6;
  display: flex;
  /* margin-top: 10px; */
  color: #000;
}
.weekdays-li {
  float: left;
  flex: 1;
  font-size: 18px;
  width: 50px;
  list-style-type: none;
  text-align: center;
  cursor: pointer;
  color: #000;
  height: 40px;
  line-height: 40px;
}
.selected {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 70%;
  background-color: #1e90ff;
  opacity: 0.3;
}
.active {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 50%;
  background-color: #0094ff;
}
.other-month {
  color: #d8d8d5;
}
</style>
<script>
export default {
  data() {
    return {
      currentYear: 1970, // 年份
      currentMonth: 1, // 月份
      currentDay: 1, // 日期
      currentWeek: 1, // 星期
      firstWeek: 1,
      days: [],
      daysUL: [],
      params: {
        selectDay: "",
        type: ""
      },
      isSelected: [],
      isBan: [],
      isXiu: [],
      restDays: {
        year: "",
        month: "",
        day: "",
        resttype: "",
        restdate: ""
      },
      restDaysList: [],
      banList: [],
      xiuList: [],
      selectIndex: "",
      date: ""
    };
  },

  mounted() {
    this.initData(null);
  },

  methods: {
    //格式化日期
    formatDate(year, month, day) {
      const y = year;
      let m = month;
      if (m < 10) m = `0${m}`;
      let d = day;
      if (d < 10) d = `0${d}`;
      return `${y}-${m}-${d}`;
    },

    initData(cur) {
      // debugger;
      let date = "";
      if (cur) {
        date = new Date(cur);
      } else {
        date = new Date();
      }
      this.currentDay = date.getDate(); // 今日日期 几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份
      this.currentWeek = date.getDay(); // 1...6,0   // 今天是星期几

      //当前月的第一天是星期几
      date.setDate(1);
      this.firstWeek = date.getDay();

      if (this.firstWeek === 0) {
        this.firstWeek = 7;
      }
      const str = this.formatDate(this.currentYear, this.currentMonth, 1); // 今日日期 年-月-日
      this.days.length = 0;

      // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 42- this.firstWeek
      for (let i = this.firstWeek - 1; i >= 0; i -= 1) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        this.days.push(d);
      }
      //处理1号是星期天为 7 的情况， 为7天就直接放在daysUL里
      if (this.days.length % 7 === 0) {
        this.daysUL.push(this.days);
        this.days = [];
      }

      for (let i = 1; i <= 42 - this.firstWeek; i += 1) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);
        this.days.push(d); //一个 days 就是一行7天  daysUL 就是个数组，里面有六个days  就是六行42天
        if (this.days.length % 7 === 0) {
          this.daysUL.push(this.days);
          this.days = []; //清空重新存放天数
        }
      }
    },

    // 上一個月   传入当前年份和月份
    pickPre(year, month) {
      this.daysUL = [];
      this.isSelected = [];
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },

    // 下一個月   传入当前年份和月份
    pickNext(year, month) {
      this.daysUL = [];
      this.isSelected = [];
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(42);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 当前选择日期
    pick(date, index) {
      // debugger;
      this.selectIndex = index;
      this.isSelected = [];
      this.params.selectDay = this.formatDate(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      );
      for (let i = 0; i < 42; i++) {
        if (index == i) {
          this.isSelected.push(true);
          continue;
        }
        this.isSelected.push(false);
      }
    }
  }
};
</script>

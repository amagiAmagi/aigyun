<template>
  <div>
    <!-- z左边区域 -->
     <div class="left">
      <div class="left-top">
        <div class="left-top-headers">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search"></i>
        </div>
        <div class="left-top-mu">
          <span>人数</span><br>
          <el-input v-model="input1" clearable class="input-mu"></el-input> —
          <el-input v-model="input2" clearable class="input-mu "></el-input>
        </div>
        <div class="left-top-mu">
          <span>值保范围</span><br>
          <el-select  @change="provinceChange" v-model="value" placeholder="全国" class="province" multiple >
                 <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label" >
               </el-option>
          </el-select>
        </div>
        <div class="left-top-buttom">
          <el-button type="primary" class="sousers">搜索</el-button>
          <!-- <el-button plain>全部</el-button> -->
        </div>
      </div>
      <div class="left-center">
        <el-button type="text" class="left-center-button"  @click="dialogFormVisibles = true"><i class="el-icon-circle-plus-outline"></i><br> 新增值保队
        </el-button>
      </div>
    </div>
    <!-- 值保队 -->
    <div class="administration">
      <div class="administration-heder">
          值保队管理( <span>{{stesasder}}</span>队 )
      </div>
      <div class="administration-center">
          <div class="administration-center-heder">
                <el-button type="primary" class="quanbu">全部</el-button>
                 <div class="demonstrate">
                   <span style="font-size: 12px">展示筛选</span>
                   <span class="el-icon-menu actions" ref="menu"  @click="menu"></span>
                   <span class="el-icon-tickets" ref="tickets"  @click="tickets"></span>
                 </div>
          </div>
          <div class="administration-center-mutation">

              <!-- 竖版 -->
              <li class="administration-center-mutation-upright" v-show="select" v-for="(item,index) in businessprotectList" :key="item.team_id">
                  <img src="../../../../assets/5555.png" alt="">
                  <div class="administration-center-mutation-upright-right">
                      <h5>{{item.team_name}}</h5>
                      <span>{{item.team_num}}人</span>
                  </div>
                  <p>服务范围:<span v-for="r in item.team_range">{{r}} </span></p>
                  <div class="modeler" >
                      <li class="modeler-li">
                        <span ><i class="el-icon-info"></i> 王某某</span>
                      </li>
                      <li class="modeler-li">
                        <span ><i class="el-icon-info"></i> 王某某</span>
                      </li>
                      <li class="modeler-li">
                        <span ><i class="el-icon-info"></i> 王某某</span>
                      </li>
                      <li class="modeler-li">
                        <span ><i class="el-icon-info"></i> 王某某</span>
                      </li>
                      <span class="el-icon-caret-right"></span>
                  </div>
                    <el-button type="primary" class="plains" plain  @click="centerDialogVisible = true">添加</el-button>
                    <el-button type="primary" class="plains" plain @click="centerDialogVisibles = true">删除</el-button>
                    <div class="administration-center-mutation-upright-footer">
                        <el-button type="primary" class="footer" @click="delteam(item.team_id,index)">删除值保队</el-button>
                        <el-button type="primary" class="footer" @click="dialogFormVisible= true">修改信息</el-button>
                    </div>
              </li>

              <!-- 横版 -->
              <div class="heder-heng" v-show="!select">
                <span class="mingchen">名称</span>
                <span class="zbfws">值保范围</span>
                <span class="dysl">队员数量</span>
                <span class="dy">队员</span>
              </div>
              <li class="heder-heng-li" v-show="!select" v-for="(item,index) in businessprotectList" :key="item.team_id">
                  <img src="../../../../assets/5555.png" alt="">
                  <div class="heder-heng-li-names">
                    <span class="heder-heng-li-names-1">{{item.team_name}}</span>
                    <span class="heder-heng-li-names-2"><span v-for="(r,indexs) in item.team_range" :key="indexs">{{r}} </span></span>
                    <span class="heder-heng-li-names-3">{{item.team_num}}</span>
                    <el-button type="primary" class="foote"  @click="delteam(item.team_id,index)">删除值保队</el-button>
                    <el-button type="primary" class="foote" @click="dialogFormVisible= true">修改信息</el-button>
                  </div>
                  <div class="heder-heng-li-dy">
                    <span>王某某</span>
                    <span>王某某</span>
                    <span>王某某</span>
                    <span>王某某</span>
                  </div>
                  <div class="heder-heng-li-right">
                    <span class="el-icon-circle-plus" @click="centerDialogVisible = true">添加</span> |
                    <span class="el-icon-circle-close" @click="centerDialogVisibles = true">删除</span>
                  </div>
              </li>
          </div>
      </div>
    </div>

    <!-- 版权号 -->
  <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px" v-show="false">
    Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
  </div>

<!-- 新增值保队弹出来的模态框 -->
  <el-dialog title="新增值保队信息" :visible.sync="dialogFormVisibles" width="45%">
   <div class="xiahuaxian"></div>
    <el-form>
      <el-form-item label="队名">
        <el-input placeholder="请输入队名" v-model="inputName2" clearable style="width: 80%">
        </el-input>
      </el-form-item>
      <el-form-item label="服务范围">
        <el-button @click="dialogVisibles = true">请选择</el-button>
        <el-tag v-for="(tag,index) in checkedCities" :key="index" closable @close="handleClose(index)">
          {{tag}}
        </el-tag>
      </el-form-item>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove" :show-file-list="true" :limit="3">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addbuiseness" class="primaryst">下一步</el-button>
    </div>
  </el-dialog>

<!-- 修改值保队弹出来的框 -->

  <el-dialog title="修改值保队信息" :visible.sync="dialogFormVisible" width="45%" >
   <div class="xiahuaxian"></div>
    <el-form>
      <el-form-item label="队名">
        <el-input placeholder="请输入队名" v-model="inputName" clearable style="width: 80%">
        </el-input>
      </el-form-item>
      <el-form-item label="服务范围">
        <el-button @click="dialogVisibles = true">请选择</el-button>
        <el-tag v-for="(tag,index) in checkedCities" :key="index" closable @close="handleClose(index)">
          {{tag}}
        </el-tag>
      </el-form-item>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove" :show-file-list="true" :limit="3">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false" class="primaryst">发布</el-button>
    </div>
  </el-dialog>

<!-- 值保地区选择弹出框 -->

  <el-dialog title="选择值保范围" :visible.sync="dialogVisibles" width="45%">
    <div class="xiahuaxian"></div>
    <div  class="elcitytag">
       <el-tag v-for="(tag,index) in checkedCities" :key="index" closable @close="handleCloses(index)">
      {{tag}}
    </el-tag>
    </div>

   <div><el-checkbox @change="checkcity" class="quanguo" v-model="checkges">全国</el-checkbox></div>
    <div class="cityPerty">
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" v-for="(item,index) in EastChina" :key="index">
        <el-checkbox class="ItemName" @change="hansdsefertfd(index)" :disabled="checkges">{{item.name}}</el-checkbox>
        <el-checkbox v-for="city in item.city" :label="city" :key="city" :disabled="checkges">{{city}}</el-checkbox>
      </el-checkbox-group>

    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibles = false" class="primarysts" >确 定</el-button>
      </span>
  </el-dialog>


<!-- 删除值保队弹出框 -->

  <el-dialog title="删除值保队" :visible.sync="dialogVisibless" width="45%">
   <div class="xiahuaxian"></div>
    <div close="delter">
      <span class="el-icon-circle-close delrefet"></span>
      <h4 class="titles">请确定是否删除值保队</h4>
      <span style="font-size: 20px;margin-left: 40px;font-weight: 700">值保一队</span>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="remotaem" class="footer-left">确 定</el-button>
        <el-button @click="dialogVisibless = false" class="footer-left right">取 消</el-button>

      </span>
  </el-dialog>

<!-- 新增队员弹出框 -->

  <el-dialog title="添加值保队员" :visible.sync="centerDialogVisible" width="45%">
    <div class="xiahuaxian"></div>
    <div class="center-top">
      <div class="titerlser">已选择:</div>
      <div class="tags">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>王某某</span><i class="el-icon-circle-close rightdelr"></i>
      </div>
      <div class="tags">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>王某某</span><i class="el-icon-circle-close rightdelr"></i>
      </div>
      <div class="tags">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>王某某</span><i class="el-icon-circle-close rightdelr"></i>
      </div>
    </div>
    <div class="center-dyxz">
      <div class="center-dyxz-top">
          <el-button type="primary prim">全部</el-button>
           <el-input placeholder="请输入内容" v-model="input3" class="input3">
           </el-input>
           <i class="el-icon-search sous"></i>
      </div>
      <div class="center-dyxz-center">
        <li class="center-dyxz-center-li">
          <div class="center-dyxz-center-li-top">
            <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
            <div  class="center-dyxz-center-li-right">
              <span>张某某</span><br>
            <span>男<span>27</span>岁</span>
            </div>
          </div>
          <p><span>加入时间:</span>2017-11-21</p>
          <p>广东省深圳市南山区特发信息港A栋8楼</p>
          <span class="el-icon-circle-check bottom"></span>
        </li>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisible = false" class="quedibng">发布</el-button>
    </span>
  </el-dialog>

<!-- 删除队员弹出框 -->

  <el-dialog title="删除值保队员" :visible.sync="centerDialogVisibles" width="45%">
   <div class="xiahuaxian"></div>
    <div class="center-top">
      <div class="titerlser">已选择:</div>
      <div class="tags">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>王某某</span><i class="el-icon-circle-close rightdelr"></i>
      </div>
      <div class="tags">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>王某某</span><i class="el-icon-circle-close rightdelr"></i>
      </div>
      <div class="tags">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>王某某</span><i class="el-icon-circle-close rightdelr"></i>
      </div>
    </div>
    <div class="center-dyxz">
      <div class="center-dyxz-top">
          <el-button type="primary prim">全部</el-button>
           <el-input placeholder="请输入内容" v-model="input3" class="input3">
           </el-input>
           <i class="el-icon-search sous"></i>
      </div>
      <div class="center-dyxz-center">
        <li class="center-dyxz-center-li">
          <div class="center-dyxz-center-li-top">
            <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
            <div  class="center-dyxz-center-li-right">
              <span>张某某</span><br>
            <span>男<span>27</span>岁</span>
            </div>
          </div>
          <p><span>加入时间:</span>2017-11-21</p>
          <p>广东省深圳市南山区特发信息港A栋8楼</p>
          <span class="el-icon-circle-check bottom"></span>
        </li>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisibles = false" class="quedibng">确 定</el-button>
    </span>
  </el-dialog>

  </div>
</template>
<script>
import "./tenant.css";
import api from "../../../common/api.js";
export default {
  data() {
    return {
      checkges: false,
      centerDialogVisibles: false,
      input3: "",
      centerDialogVisible: false,
      dialogFormVisibles: false,
      inputName2: "",
      dialogVisibless: false,
      checkedCities: [],
      inputName: "",
      input1: "",
      input2: "",
      value: "",
      select: true,
      options: [
        { value: "0", label: "北京市" },
        { value: "1", label: "天津市" },
        { value: "2", label: "上海市" },
        { value: "3", label: "重庆市" },
        { value: "4", label: "河北省" },
        { value: "5", label: "山西省" },
        { value: "6", label: "辽宁省" },
        { value: "7", label: "吉林省" },
        { value: "8", label: "黑龙江省" },
        { value: "9", label: "江苏省" },
        { value: "10", label: "浙江省" },
        { value: "11", label: "安徽省" },
        { value: "12", label: "福建省" },
        { value: "13", label: "江西省" },
        { value: "14", label: "山东省" },
        { value: "15", label: "河南省" },
        { value: "16", label: "湖北省" },
        { value: "17", label: "湖南省" },
        { value: "18", label: "广东省" },
        { value: "19", label: "海南省" },
        { value: "20", label: "四川省" },
        { value: "21", label: "贵州省" },
        { value: "22", label: "云南省" },
        { value: "23", label: "陕西省" },
        { value: "24", label: "甘肃省" },
        { value: "25", label: "青海省" },
        { value: "26", label: "西藏自治区" },
        { value: "27", label: "广西壮族自治区" },
        { value: "28", label: "内蒙古自治区" },
        { value: "29", label: "宁夏回族自治区" },
        { value: "30", label: "新疆维吾尔族自治区" },
        { value: "31", label: "香港特别行政区" },
        { value: "32", label: "澳门地区" },
        { value: "33", label: "台湾省" }
      ],
      dialogFormVisible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      dialogVisibles: false,
      EastChina: [
        {
          name: "华东",
          city: ["山东", "江苏", "安徽", "浙江", "福建", "上海"]
        },
        {
          name: "华南",
          city: ["广东", "广西", "海南"]
        },
        {
          name: "华中",
          city: ["湖北", "湖南", "河南", "江西"]
        },
        {
          name: "华北",
          city: ["北京", "天津", "河北", "山西", "内蒙古"]
        },
        {
          name: "西北",
          city: ["宁夏", "新疆", "青海", "陕西", "甘肃"]
        },
        {
          name: "西南",
          city: ["四川", "云南", "贵州", "西藏", "重庆"]
        },
        {
          name: "东北",
          city: ["辽宁", "吉林", "黑龙江"]
        },
        {
          name: "港澳台",
          city: ["台湾", "香港", "澳门"]
        }
      ],
      list: [],
      num: 0,
      index: "",
      conList: [],
      one1: 0,
      one2: 0,
      one3: 0,
      one4: 0,
      one5: 0,
      one6: 0,
      one7: 0,
      one8: 0,
      one9: 0,
      id: "",
      states: 0,
      businessprotectList: [],
      stesasder: "",
      teamId: "",
      indexs: ""
    };
  },
  methods: {
    provinceChange: function() {
      console.log(this.value);
    },
    menu: function() {
      this.select = true;
      this.$refs.menu.className = "el-icon-menu actions";
      this.$refs.tickets.className = "el-icon-tickets";
    },
    tickets: function() {
      this.select = false;
      this.$refs.menu.className = "el-icon-menu";
      this.$refs.tickets.className = "el-icon-tickets actions";
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleClose(index) {
      console.log(index);
      this.checkedCities.splice(index, 1);
    },
    handleCheckedCitiesChange(val) {
      console.log(val);
      for (var i = 0; i < val.length; i++) {
        if (val[i] == undefined) {
          val.splice(i, 1);
        }
      }
    },
    checkcity(val) {
      console.log(this.checkges);
      if (val == true) {
        this.checkedCities = ["全国"];
      } else {
        this.checkedCities = [];
      }
    },
    handleCloses(index) {
      if (this.checkedCities[index] == "全国") {
        this.checkges = false;
      }
      this.checkedCities.splice(index, 1);
      this.EastChina = [
        {
          name: "华东",
          city: ["山东", "江苏", "安徽", "浙江", "福建", "上海"]
        },
        {
          name: "华南",
          city: ["广东", "广西", "海南"]
        },
        {
          name: "华中",
          city: ["湖北", "湖南", "河南", "江西"]
        },
        {
          name: "华北",
          city: ["北京", "天津", "河北", "山西", "内蒙古"]
        },
        {
          name: "西北",
          city: ["宁夏", "新疆", "青海", "陕西", "甘肃"]
        },
        {
          name: "西南",
          city: ["四川", "云南", "贵州", "西藏", "重庆"]
        },
        {
          name: "东北",
          city: ["辽宁", "吉林", "黑龙江"]
        },
        {
          name: "港澳台",
          city: ["台湾", "香港", "澳门"]
        }
      ];
    },
    hansdsefertfd(index) {
      console.log(index);
      this.index = index;
      this.num++;
      switch (index) {
        case 0:
          this.one9++;
          if (this.one9 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }

          break;
        case 1:
          this.one1++;
          if (this.one1 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
        case 2:
          this.one2++;
          if (this.one2 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
        case 3:
          this.one3++;
          if (this.one3 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
        case 4:
          this.one4++;
          if (this.one4 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
        case 5:
          this.one5++;
          if (this.one5 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
        case 6:
          this.one6++;
          if (this.one6 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
        case 7:
          this.one7++;
          if (this.one7 % 2 != 0) {
            this.setcity();
          } else {
            this.remcity();
          }
          break;
      }
    },
    setcity: function() {
      for (var i = 0; i < this.EastChina[this.index].city.length; i++) {
        this.list.push(this.EastChina[this.index].city[i]);
        this.conList = this.list;
        this.checkedCities = this.conList;
      }
    },
    remcity: function() {
      for (var i = 0; i < this.EastChina[this.index].city.length; i++) {
        const ins = this.checkedCities.indexOf(
          this.EastChina[this.index].city[i]
        );
        if (ins > -1) {
          this.conList.splice(ins, 1);
          this.checkedCities.splice(ins, 1);
        }
      }
    },
    // 获取值保队的信息
    getuseifonData: function() {
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
          {
            reg_id: this.id,
            action: 2
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            // 将值保队信息存入到vuex中
            this.$store.commit("businessprotectList", res.data.attachment);
            // 将信息存到本地
            window.sessionStorage.setItem(
              "businessprotectList",
              JSON.stringify(res.data.attachment)
            );
          }
        });
    },
    // 获取值保商id
    getuseid: function() {
      this.id = this.$store.getters.getbusinessId;
      if (this.id == "") {
        const data = JSON.parse(window.localStorage.getItem("businessid"));
        this.$store.commit("business", data);
        this.id = this.$store.getters.getbusinessId;
      }
    },
    // 新增值保队
    addbuiseness: function() {
      // this.$http
      //   .post(
      //     api.apihost + "ServiceTeamInfo",
      //     {
      //       action: 0,
      //       team_name: this.inputName2,
      //       reg_id: this.id,
      //       team_range: this.checkedCities
      //     },
      //     {
      //       headers: {
      //         "Content-Type": "application/x-www-form-urlencoded"
      //       }
      //     }
      //   )
      //   .then(res => {
      //     console.log(res);
      //   });
      this.dialogFormVisibles = false;
      this.centerDialogVisible = true;
    },
    // 获取值保队信息映射到视图
    getbusinessprotectList: function() {
      this.businessprotectList = this.$store.getters.getbusinessprotectList;
      if (this.businessprotectList.length == 0) {
        const busList = JSON.parse(
          window.sessionStorage.getItem("businessprotectList")
        );
        this.$store.commit("businessprotectList", busList);
      }
      this.businessprotectList = this.$store.getters.getbusinessprotectList;
      this.stesasder = this.businessprotectList.length;
      console.log(this.businessprotectList);
    },
    delteam: function(id, index) {
      this.dialogVisibless = true;
      this.teamId = id;
      this.indexs = index;
      console.log(id, index);
    },
    remotaem: function() {
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
          {
            action: 1,
            team_id: this.teamId
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            // 删除vuex中的数据
            this.$store.commit("removebusinessprotectList", this.indexs);
            // 删除存储在本地的数据
            const req = JSON.parse(
              window.sessionStorage.getItem("businessprotectList")
            );

            const reqs = req.splice(this.indexs, 1);
            window.sessionStorage.setItem(
              "businessprotectList",
              JSON.stringify(req)
            );
            this.businessprotectList = this.$store.getters.getbusinessprotectList;
            this.stesasder = this.businessprotectList.length;
          }
        });
      this.dialogVisibless = false;
    }
  },
  mounted() {
    this.getuseid();
    this.getuseifonData();
    this.getbusinessprotectList();
  }
};
</script>



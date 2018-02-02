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
          值保队管理( <span>{{stesasder == "" ? 0:stesasder}}</span>队 )
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
                  <p>服务范围:<span v-for="(r,i) in item.team_range" :key="i">{{r}} </span></p>
                  <div class="modeler">
                    <span class="el-icon-caret-left" ref="icon_left" @click="lunbos(item.players,index)" v-show="iconnumber > iconnumbers"></span>
                      <li class="modeler-li" v-for="(items,s) in item.players" :key="s" v-show="s<4">
                        <span >{{items.real_name}}</span>
                      </li>
                      <span class="el-icon-caret-right" v-if="item.players.length > 4" @click="lunbo(item.players,index)"></span>
                  </div>
                    <el-button type="primary" class="plains" plain  @click="addplayers(item.team_id)">添加</el-button>
                    <el-button type="primary" class="plains" plain @click="deltplay(item.team_id)">删除</el-button>
                    <div class="administration-center-mutation-upright-footer">
                        <el-button type="primary" class="footer" @click="delteam(item.team_id,index,item)">删除值保队</el-button>
                        <el-button type="primary" class="footer" @click="amend(item.team_id)">修改信息</el-button>
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
                    <el-button type="primary" class="foote" @click="amend(item.team_id)">修改信息</el-button>
                  </div>
                  <div class="heder-heng-li-dy">
                    <span v-for="(items,t) in item.players" :key="t">{{items.real_name}}&nbsp;</span>
                  </div>
                  <div class="heder-heng-li-right">
                    <span class="el-icon-circle-plus"  @click="addplayers(item.team_id)">添加</span> |
                    <span class="el-icon-circle-close" @click="deltplay(item.team_id)">删除</span>
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
  <el-dialog title="新增值保队信息" :visible.sync="dialogFormVisibles" width="45%" :lock-scroll="false">
   <div class="xiahuaxian"></div>
    <el-form style="width: 80%">
      <el-form-item label="队名" style="width: 80%">
        <el-input placeholder="请输入队名" v-model="inputName2" clearable style="width: 80%">
        </el-input>
      </el-form-item>
      <el-form-item label="服务范围">
        <el-button @click="dialogVisibles = true">请选择</el-button>
        <el-tag v-for="(tag,index) in checkedCities" :key="index" closable @close="handleClose(index)">
          {{tag}}
        </el-tag>
      </el-form-item>
     <upaldimg></upaldimg>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addbuiseness" class="primaryst">下一步</el-button>
    </div>
  </el-dialog>

<!-- 修改值保队弹出来的框 -->

  <el-dialog title="修改值保队信息" :visible.sync="dialogFormVisible" width="45%" :lock-scroll="false">
   <div class="xiahuaxian"></div>
    <el-form style="width: 80%">
      <el-form-item label="队名" style="width: 80%">
        <el-input placeholder="请输入队名" v-model="inputName" clearable style="width: 80%">
        </el-input>
      </el-form-item>
      <el-form-item label="服务范围">
        <el-button @click="dialogVisibles = true">请选择</el-button>
        <el-tag v-for="(tag,index) in checkedCities" :key="index" closable @close="handleClose(index)">
          {{tag}}
        </el-tag>
      </el-form-item>
      <imagesr></imagesr>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="revamp" class="primaryst">确定</el-button>
    </div>
  </el-dialog>

<!-- 值保地区选择弹出框 -->

  <el-dialog title="选择值保范围" :visible.sync="dialogVisibles" width="45%" :lock-scroll="false">
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

  <el-dialog title="删除值保队" :visible.sync="dialogVisibless" width="45%" :lock-scroll="false">
   <div class="xiahuaxian"></div>
    <div close="delter">
      <span class="el-icon-circle-close delrefet"></span>
      <h4 class="titles">请确定是否删除值保队</h4>
      <span style="font-size: 20px;margin-left: 40px;font-weight: 700">{{name}}</span>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="remotaem" class="footer-left">确 定</el-button>
        <el-button @click="dialogVisibless = false" class="footer-left right">取 消</el-button>

      </span>
  </el-dialog>

<!-- 新增值保队添加队员弹出框 -->

  <el-dialog title="添加值保队员" :visible.sync="centerDialogVisible" width="45%" :lock-scroll="false">
    <div class="xiahuaxian"></div>
    <div class="center-top">
      <div class="titerlser">已选择:</div>
      <div class="tags" v-for="(item,index) in pullteantList" :key="index">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>{{item.real_name}}</span><i class="el-icon-circle-close rightdelr" @click="deltepulltean(index)"></i>
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
        <li class="center-dyxz-center-li" v-for="(item,index) in TeanminstrList" :key="index" @click="teanmistr(index,item.tp_reg_id,item)" >
          <div class="center-dyxz-center-li-top">
            <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
            <div  class="center-dyxz-center-li-right">
              <span>{{item.real_name}}</span><br>
            <span>{{item.sex == 0?"男":"女"}}<span>{{item.age}}</span>岁</span>
            </div>
          </div>
          <p><span>加入时间:</span>{{item.reg_time|time}}</p>
          <p>{{item.reg_country +"-"+ item.reg_prov+"-"+item.reg_city}}</p>
          <div class="pullteant" ref="asteantList">
            <span class="el-icon-circle-check bottom"></span>
          </div>
          <div class="asteant" ref="asteantListss">
            <span class="el-icon-circle-plus bottom"></span>
          </div>
        </li>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="quedibng" class="quedibng">确定</el-button>
    </span>
  </el-dialog>

<!-- 新增队员弹出框 -->
  <el-dialog title="添加值保队员" :visible.sync="centerDialogVisibless" width="45%" :lock-scroll="false">
    <div class="xiahuaxian"></div>
    <div class="center-top">
      <div class="titerlser">已选择:</div>
      <div class="tags" v-for="(item,index) in pullteantList" :key="index">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>{{item.real_name}}</span><i class="el-icon-circle-close rightdelr" @click="deltepullteans(index)"></i>
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
        <li class="center-dyxz-center-li" v-for="(item,index) in TeanminstrList" :key="index" @click="teanmistrs(index,item.tp_reg_id,item)" >
          <div class="center-dyxz-center-li-top">
            <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
            <div  class="center-dyxz-center-li-right">
              <span>{{item.real_name}}</span><br>
            <span>{{item.sex == 0?"男":"女"}}<span>{{item.age}}</span>岁</span>
            </div>
          </div>
          <p><span>加入时间:</span>{{item.reg_time|time}}</p>
          <p>{{item.reg_country +"-"+ item.reg_prov+"-"+item.reg_city}}</p>
          <div class="pullteant" ref="asteantLists">
            <span class="el-icon-circle-check bottom"></span>
          </div>
          <div class="asteant" ref="asteantListss">
            <span class="el-icon-circle-plus bottom"></span>
          </div>
        </li>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="quedibngs" class="quedibng">确定</el-button>
    </span>
  </el-dialog>
<!-- 删除队员弹出框 -->

  <el-dialog title="删除值保队员" :visible.sync="centerDialogVisibles" width="45%" :lock-scroll="false">
   <div class="xiahuaxian"></div>

    <div class="center-dyxz">
      <div class="center-dyxz-top">
          <el-button type="primary prim">全部</el-button>
           <el-input placeholder="请输入内容" v-model="input3" class="input3">
           </el-input>
           <i class="el-icon-search sous"></i>
      </div>
      <div class="center-dyxz-center">
        <li class="center-dyxz-center-li" v-for="(item,index) in playersList" :key="index">
          <div class="center-dyxz-center-li-top">
            <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
            <div  class="center-dyxz-center-li-right">
              <span>{{item.real_name}}</span><br>
            <span>{{item.sex == 0?"男":"女"}}<span>{{item.age}}</span>岁</span>
            </div>
          </div>
          <p><span>加入时间:</span>{{item.reg_time|time}}</p>
          <p>{{item.reg_country +"-"+ item.reg_prov+"-"+item.reg_city}}</p>
          <span class="el-icon-error bottom" @click="deleret(item.tp_reg_id,index)"></span>
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
import upaldimg from "../../../common/upladimg.vue";
import imagesr from "../../../common/image.vue";
export default {
  data() {
    return {
      iconnumbers: 0,
      tp_reg_id: "",
      playersList: [],
      tp_reg_idList: [],
      pullteantList: [],
      TeanminstrList: [],
      checkges: false,
      centerDialogVisibles: false,
      centerDialogVisibless: false,
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
      indexs: "",
      namelist: [],
      names: [],
      iconnumber: 0,
      name: ""
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
      this.checkedCities.splice(index, 1);
    },
    handleCheckedCitiesChange(val) {
      for (var i = 0; i < val.length; i++) {
        if (val[i] == undefined) {
          val.splice(i, 1);
        }
      }
    },
    checkcity(val) {
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
            this.businessprotectList = res.data.attachment;
            this.stesasder = this.businessprotectList.length;
          }
          console.log(this.businessprotectList);
        });
    },
    // 获取值保商id
    getuseid: function() {
      this.id = window.sessionStorage.getItem("id");
    },
    addbuiseness: function() {
      this.$http
        .post(
          api.apihost + "ServicePlayerManager",
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
          if (res.data.code == 0) {
            this.TeanminstrList = res.data.attachment.undeployed;
          }
        });
      this.dialogFormVisibles = false;
      this.centerDialogVisible = true;
      this.tp_reg_idList = [];
      this.pullteantList = [];
    },

    delteam: function(id, index, item) {
      console.log(item);
      this.name = item.team_name;
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
            this.businessprotectList.splice(this.indexs, 1);
            this.getuseifonData();
          }
        });
      this.dialogVisibless = false;
    },
    teanmistr: function(index, id, item) {
      this.$refs.asteantListss[index].className = "pullteant";
      this.$refs.asteantList[index].className = "pullteant asteant";

      this.tp_reg_idList.push(id);
      this.pullteantList.push(this.TeanminstrList[index]);
    },
    deltepulltean: function(index) {
      for (let i = 0; i < this.TeanminstrList.length; i++) {
        if (this.tp_reg_idList[index] == this.TeanminstrList[i].tp_reg_id) {
          this.$refs.asteantList[i].className = "pullteant";
          // this.$refs.asteantLists[i].className = "pullteant";
          this.$refs.asteantListss[i].className = "asteant";
        }
      }
      this.pullteantList.splice(index, 1);
      this.tp_reg_idList.splice(index, 1);
    },
    teanmistrs: function(index, id, item) {
      if (this.$refs.asteantLists[index].className == "pullteant asteant") {
        this.$refs.asteantLists[index].className = "pullteant ";
        this.$refs.asteantListss[index].className = "pullteant asteant";
        for (let i = 0; i < this.pullteantList.length; i++) {
          if (this.pullteantList[i] == item) {
            this.pullteantList.splice(i, 1);
          }
        }
      } else {
        this.$refs.asteantLists[index].className = "pullteant asteant";
        this.$refs.asteantListss[index].className = "pullteant";
        this.tp_reg_idList.push(id);
        this.pullteantList.push(this.TeanminstrList[index]);
      }
    },
    deltepullteans: function(index) {
      for (let i = 0; i < this.TeanminstrList.length; i++) {
        if (this.tp_reg_idList[index] == this.TeanminstrList[i].tp_reg_id) {
          // this.$refs.asteantList[i].className = "pullteant";
          this.$refs.asteantLists[i].className = "pullteant";
          this.$refs.asteantListss[i].className = "asteant";
        }
      }
      this.pullteantList.splice(index, 1);
      this.tp_reg_idList.splice(index, 1);
    },
    quedibng: function() {
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
          {
            action: 0,
            team_name: this.inputName2,
            reg_id: this.id,
            team_range: this.checkedCities,
            tp_reg_ids: this.tp_reg_idList
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          if (res.data.code == 0) {
            this.$message({
              message: "值保队新增成功",
              type: "success"
            });
            this.getuseifonData();
          } else {
            this.$message.error("值保队新增失败");
          }
        });
      this.centerDialogVisible = false;
    },
    // 新增队员
    addplayers: function(id) {
      this.teamId = id;
      this.$http
        .post(
          api.apihost + "ServicePlayerManager",
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
          if (res.data.code == 0) {
            this.TeanminstrList = res.data.attachment.undeployed;
          }
        });
      this.centerDialogVisibless = true;
      this.tp_reg_idList = [];
      this.pullteantList = [];
    },
    // 新增值保队值保队员
    quedibngs: function() {
      this.$http
        .post(
          api.apihost + "ServiceTeamPlayer",
          {
            action: 0,
            team_id: this.teamId,
            tp_reg_ids: this.tp_reg_idList
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          if (res.data.code == 0) {
            this.getuseifonData();
            this.$message({
              message: "值保队新增成功",
              type: "success"
            });
          }
        });
      this.centerDialogVisibless = false;
    },
    deltplay: function(id) {
      this.teamId = id;
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
          {
            action: 2,
            team_id: id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          if (res.data.code == 0) {
            this.playersList = res.data.attachment[0].players;
          }
        });
      this.centerDialogVisibles = true;
    },
    amend: function(id) {
      this.dialogFormVisible = true;
      this.teamId = id;
    },
    revamp: function() {
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
          {
            action: 3,
            team_name: this.inputName,
            team_id: this.teamId,
            team_range: this.checkedCities
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          if (res.data.code == 0) {
            this.getuseifonData();
          }
        });
      this.dialogFormVisible = false;
    },
    deleret: function(id, index) {
      this.$http
        .post(
          api.apihost + "ServiceTeamPlayer",
          {
            action: 1,
            team_id: this.teamId,
            tp_reg_id: id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          if (res.data.code == 0) {
            this.playersList.splice(index, 1);
            this.getuseifonData();
          }
        });
    },
    lunbo: function(arr, idnex) {
      if (this.iconnumber == 0) {
        this.names = arr;
      }
      const arrs = this.names.slice(4 * this.iconnumber + 4);

      this.businessprotectList[idnex].players = arrs;

      this.$refs.icon_left[idnex].className = "el-icon-caret-left icon_left";
      this.iconnumber++;
      console.log(this.iconnumber);
    },
    lunbos: function(arr, index) {
      console.log(this.iconnumber);
      this.iconnumber--;
      console.log(this.iconnumber);
      const arrs = this.names.slice(4 * this.iconnumber);
      this.businessprotectList[index].players = arrs;
      if (arrs.length == this.names.length) {
        this.$refs.icon_left[index].className = "el-icon-caret-left";
      }

      if (this.iconnumber == 0) {
        this.getuseifonData();
      }
      console.log(this.iconnumber);
    }
  },
  mounted() {
    this.getuseid();
    this.getuseifonData();
  },
  components: {
    upaldimg,
    imagesr
  }
};
</script>

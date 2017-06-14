//index.js
var images = require('../../utils/images.js');
var broadcast = require('../../utils/broadcast.js');

var BaseInfo = require('../../model/baseinfo.js');
var Work = require('../../model/work.js');
var Education = require('../../model/education.js');
var Project = require('../../model/project.js');
//获取应用实例
var app = getApp();
var AV = app.getAVInstance();
const baseInfoQuery = new AV.Query(BaseInfo).equalTo('oUser', AV.User.current());
const workQuery = new AV.Query(Work).equalTo('oUser', AV.User.current()).descending('createdAt');
const educationQuery = new AV.Query(Education).equalTo('oUser', AV.User.current()).descending('sStartTime');
const ProjectQuery = new AV.Query(Project).equalTo('oUser', AV.User.current()).descending('sStartTime');

console.log(app.globalData);

Page({
  data: {
    avatorpath: images.avator,
    baseInfo:{},
    works:[{}],
    edus: [],
    projects:[]
  },
  onLoad:function(options){
  },
  onShow: function(e) {
    AV.Promise.all([
      baseInfoQuery.find().then(data=>data.map(item=>item.toJSON())).then(data => this.setData({ baseInfo: data[0] })), 
      workQuery.find().then(data => data.map(item => item.toJSON())).then(data => this.setData({ works: data })),
      educationQuery.find().then(data => data.map(item => item.toJSON())).then(data => this.setData({ edus: data })), 
      ProjectQuery.find().then(data => data.map(item => item.toJSON())).then(data => this.setData({ projects: data }))
    ]).then(_=>console.log(_))
  },
  /**
   * 点击头像触发事件，修改头像源路径
   */
  bindAvatorTap:function(){
    var that = this;
    function chooseImageSuccess (res){
      var tempFilePath = res.tempFilePaths[0]
      that.setData({
        avatorpath: tempFilePath
      })
    }
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: chooseImageSuccess
    })
  },
  /**
   * 用户点击用户名进行跳转，并将必要数据进行传输
   */
  bindNavToBaseInfoTap: function (e) {
    wx.navigateTo({
      url: '../baseinfo/baseinfo?data=' + encodeURI(JSON.stringify(this.data.baseInfo))
    })
  },
  /**
   * 用户点击学校名跳转，并将必要数据进行传输
   */
  bindNavToEducationTap: function(e){
    wx.navigateTo({
      url: '../education/education?data='+encodeURI(JSON.stringify(this.data.edus))
    })
  },
  /**
   * 点击公司名称跳转，并传输必要数据
   */
  bindNavToWorkTap: function(e){
    wx.navigateTo({
      url: '../work/work?data=' + encodeURI(JSON.stringify(this.data.works)),
    })
  },
  /**
   * 点击工程名跳转，并传输必要数据
   */
  bindNavToProjectTap: function(e){
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../project/project?data=' + encodeURI(JSON.stringify(this.data.projects)),
    })
  },
  /**
   *  点击投递按钮，进行简历投递
   */
  bindDeliverTap: function(){
    wx.navigateTo({
      url: '../deliver/deliver'
    })
  }
})

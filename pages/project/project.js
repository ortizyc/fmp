// project.js
var Project = require('../../model/project.js');
var app = getApp();

var AV = app.getAVInstance();
var project = new Project();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.data){
      var oProject = JSON.parse(decodeURI(options.data));
      this.setData(oProject);
      if('objectId' in oProject){
        project = AV.Object.createWithoutData('Project', oProject.objectId);
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    project.oUser = AV.User.current();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 用户修改工程名时触发
   */
  bindSProjectNameTap: function (e) {
    var sProjectName = e.detail.value;
    this.setData({
      sProjectName: sProjectName
    });
    project.sProjectName = sProjectName;
  },
  /**
   * 用户修改责任触发
   */
  bindSDutyInput: function (e) {
    var sDuty = e.detail.value;
    this.setData({
      sDuty: sDuty
    })
    project.sDuty = sDuty;
  },
  /**
   * 用户修改开始时间
   */
  bindSStartTimeChange: function (e) {
    var sStartTime = e.detail.value;
    this.setData({
      sStartTime: sStartTime
    })
    project.sStartTime = sStartTime;
  },
  /**
   * 用户修改结束时间
   */
  bindSEndTimeChange: function (e) {
    var sEndTime = e.detail.value;
    this.setData({
      sEndTime: sEndTime
    })
    project.sEndTime = sEndTime;
  },
  /**
   * 添加或修改连接
   */
  bindSLinkInput: function (e) {
    var sLink = e.detail.value;
    this.setData({
      sLink: sLink
    })
    project.sLink = sLink;
  },
  /**
   * 添加或修改项目描述
   */
  bindSDescriptionInput: function(e){
    var sDescription = e.detail.value;
    thi.setData({
      sDescription: sDescription
    })
    project.sDescription = sDescription;
  },
  /**
   * 添加新项目
   */
  bindAddTap: function(e){

  },
  /**
   * 保存修改的项目
   */
  bindSaveTap: function(e){
    project.save().then(_=>{
      wx.navigateBack({
        delta: 1,
      })
    }).catch(err=>{
      wx.showToast({
        title: '保存失败'
      })
    })
  }
})
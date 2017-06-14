// work.js
var Work = require('../../model/work');
var app = getApp();
var AV = app.getAVInstance();

var work = new Work();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sCompany: '',
    sPost: '',
    sStartTime: '',
    sEndTime: '',
    sDescription: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    work.oUser = AV.User.current();
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
  bindSCompanyInput: function (e) {
    var sCompany = e.detail.value;
    this.setData({
      sCompany: sCompany
    });
    work.sCompany = sCompany;
  },
  bindSPostInput: function (e) {
    var sPost = e.detail.value;
    this.setData({
      sPost: sPost
    });
    work.sPost = sPost;
  },
  bindSStartTimeChange: function (e) {
    var sStartTime = e.detail.value;
    this.setData({
      sStartTime: sStartTime
    });
    work.sStartTime = sStartTime;
  },
  bindSEndTimeChange: function (e) {
    var sEndTime = e.detail.value;
    this.setData({
      sEndTime: sEndTime
    })
    work.sEndTime = sEndTime;
  },
  bindSDescriptionInput: function (e) {
    var sDescription = e.detail.value;
    this.setData({
      sDescription: sDescription
    })
    work.sDescription = sDescription;
  },
  /**
   * 用户点击保存
   */
  bindSaveTap: function () {
    work.save().then(_ => {
      wx.navigateBack({
        delta: 2,
      })
    }).catch(err => {
      wx.showToast({
        title: '保存信息失败'
      })
    })
  }
})
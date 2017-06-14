var Education = require('../../model/education.js');
var app = getApp();

var AV = app.getAVInstance();
var education = new Education();;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    aAcademic: ['专科', '本科', '研究生', '博士', '其他'],
    edu: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.data);
    if (options.data) {
      let oEdu = JSON.parse(decodeURI(options.data));
      this.setData(Object.assign(this.data,oEdu));
      if ('objectId' in oEdu) {
        education = AV.Object.createWithoutData('Education', oEdu.objectId);
      } 
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    education.oUser = AV.User.current();
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
   * 用户修改学校名时实时触发
   */
  bindSSchoolNameInput: function (e) {
    var sSchoolName = e.detail.value;
    this.setData({
      'edu.sSchoolName': sSchoolName
    })
    education.sSchoolName = sSchoolName;

  },
  /**
   * 用户修改专业信息触发
   */
  bindSMajorInput: function (e) {
    var sMajor = e.detail.value;
    this.setData({
      'edu.sMajor': sMajor
    })
    education.sMajor = sMajor;
  },
  /**
   * 用户修改学历信心触发
   */
  bindNAcademicChange: function (e) {
    var nAcademic = e.detail.value;
    this.setData({
      'edu.nAcademic': nAcademic
    })
    education.nAcademic = nAcademic;
  },
  /**
   * 用户修改开始时间
   */
  bindSStartTimeChange: function (e) {
    var sStartTime = e.detail.value;
    this.setData({
      'edu.sStartTime': sStartTime
    })
    education.sStartTime = sStartTime;
  },
  /**
   * 用户修改结束时间
   */
  bindSEndTimeChange: function (e) {
    var sEndTime = e.detail.value;
    this.setData({
      'edu.sEndTime': sEndTime
    })
    education.sEndTime = sEndTime;
  },
  /**
   * 用户点击添加时触发事件，
   * 
   */
  bindAddNewEduTap: function () {
    wx.navigateTo({
      url: '../addedu/addedu'
    })
  },
  /**
   * 用户点击保存按钮时触发事件
   */
  bindSaveTap: function () {
    education.save().then(_ => {
      wx.navigateBack({
        delta: 1,
      })
    }).catch(err => {
      wx.showToast({
        title: '保存信息失败'
      })
    })
  }
})
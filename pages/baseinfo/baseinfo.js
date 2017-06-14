// baseinfo.js
var broadcast = require('../../utils/broadcast.js');
var BaseInfo = require('../../model/baseinfo');
var baseInfo = new BaseInfo() ;
var app = getApp();
var AV = app.getAVInstance();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    aGender: ['未知', '男', '女'],
    sName: '',
    nMobile: '',
    nGender: '',
    sBirth: '',
    nYearOfWork: '',
    sJobIntension: '',
    sProfSkill: '',
    sEmail: '',
    sLocation: '',
    sSelfAssessment:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    if (options.data){
      let oBaseInfoFromIndex = JSON.parse(decodeURI(options.data));
      this.setData(Object.assign(this.data, oBaseInfoFromIndex));
      if('objectId' in oBaseInfoFromIndex){
        baseInfo = AV.Object.createWithoutData('BaseInfo', oBaseInfoFromIndex.objectId);
      }
    }
    broadcast.on('selectedCityEvent', function(data,event){
      baseInfo.sLocation = data;
      _this.setData({
        sLocation:data
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    baseInfo.oUser = AV.User.current();   
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
   * 封装setData函数，返回修改的字段
   */
  /**
   * 用户修改姓名
   */
  bindSNameBlur: function (e) {
    var sName = e.detail.value;
    this.setData({
      sName: sName
    })
    baseInfo.sName = sName;
  },

  /**
   * 用户修改手机号，在编辑完失去焦点后触发
   * 
   * TODO: 需要对手机号码进行正确性验证
   */
  bindNMobileBlur: function (e) {
    var nMobile = e.detail.value;
    this.setData({
      nMobile: nMobile
    });
    baseInfo.nMobile = nMobile;
  },
  /**
   * 用户修改性别时触发
   * 
   */
  bindNGenderPickerChange: function(e){
    var nGender = e.detail.value;
    this.setData({
      nGender: nGender
    })
    baseInfo.nGender = nGender;
  },
  /**
   * 用户选择生日触发
   */
  bindSBirthChange: function (e) {
    var sBirth = e.detail.value;
    this.setData({
      sBirth: sBirth
    })
    baseInfo.sBirth = sBirth;
  },

  /**
   * 用户选择工作年限时触发
   */
  bindNYearOfWorkPickerChange: function (e) {
    var nYearOfWork = e.detail.value;
    this.setData({
      nYearOfWork: nYearOfWork
    })
    baseInfo.nYearOfWork = nYearOfWork;
  },
  /**
   * 用户编辑完工作意向后触发
   */
  bindSJobIntensionBlur: function(e){
    var sJobIntension = e.detail.value;
    this.setData({
      sJobIntension: sJobIntension
    })
    baseInfo.sJobIntension = sJobIntension;
  },
  /**
   * 用户编辑完职业技能后触发
   */
  bindSProfSkillBlur: function(e){
    var sProfSkill = e.detail.value;
    this.setData({
      sProfSkill: sProfSkill
    })
    baseInfo.sProfSkill = sProfSkill;
  },
  /**
   * 用户输入email后，控件失去焦点时触发
   * 
   * TODO: 需要进行邮箱格式验证
   */
  bindSEmailBlur: function (e) {
    var sEmail = e.detail.value;
    this.setData({
      sEmail: sEmail
    })
    baseInfo.sEmail = sEmail;
  },
  /**
   * 用户输入个人评价信息
   */
  bindSSelfAssessmentInput: function(e){
    var sSelfAssessment = e.detail.value;
    this.setData({
      sSelfAssessment: sSelfAssessment
    })
    baseInfo.sSelfAssessment = sSelfAssessment;
  },
  /**
   * 用户点击保存按钮
   * 
   * 1、保存至远程
   * 2、成功后更新本地数据
   * 3、失败提示
   */
  bindSaveTap: function (e) {
    baseInfo.save().then(_=>{
      wx.navigateBack({
        delta: 1,
      })
    }).catch(err=>{
      console.log(err);
      wx.showToast({
        title: '保存失败',
      })
    })
  }
})
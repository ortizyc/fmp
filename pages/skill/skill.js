// skill.js
var Q = require('../../utils/q.js');
var wxLean = require('../../utils/wx-lean.js');
var getSkills = function(){
  var defer = Q.defer();
  wxLean('GET','classes/skills').then(
    data=> defer.resolve(data.results)
  ).catch(
    err=>
      wxLean('POST','classes/skills',{}).then(
        data=> defer.resolve([])
      ).catch(e=>defer.reject(e))
  )
  return defer.promise;
}
var saveSkill = function(skillName){
  return wxLean('PUT','classes/skills',{sName:skillName});
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skills:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getSkills().then(_=>console.log(_))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
   * 输入框失去焦点时发生
   */
  bindCheckboxChange: function(e) {
    var sName = e.detail.value;
    saveSkill(sName).then(_=>_);
  }
})